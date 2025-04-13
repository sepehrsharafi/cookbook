import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Read ingredients from the request body
    const { ingredients } = await request.json();

    // Validate ingredients
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return NextResponse.json(
        { error: "Ingredients list is required and cannot be empty" },
        { status: 400 }
      );
    }

    // Construct the user message for the AI based on ingredients
    const userMessage = `Suggest three different recipes I can make using these ingredients: ${ingredients.join(
      ", "
    )}.`;

    const apiKey = process.env.CHUTES_API_TOKEN;

    if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
      console.error("Chutes AI API key is missing or not set in .env file");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const systemPrompt = `You are a cooking recipe API. Your goal is to provide recipe suggestions based *only* on the ingredients provided by the user. Provide exactly three distinct recipe suggestions in JSON format.

## CRITICAL INSTRUCTIONS:
1. Your response MUST be ONLY raw, machine-readable JSON objects, based *strictly* on the provided ingredients.
2. DO NOT include ANY text before or after the JSON objects.
3. DO NOT use markdown formatting like \`\`\`json ... \`\`\`.
4. DO NOT use escape characters like \\n or \\\".
5. Put all recipe text strings on single lines without line breaks inside the JSON.
6. If providing multiple recipes, separate the JSON objects ONLY with a double newline character (\n\n). NO other text or characters between them.
7. Your output MUST be in FARSI.
8. Follow this exact structure for each recipe JSON object:
9. VERY IMPORTANT: THE INSTRUCTIONS NEED TO BE CLEAR AND DETAILED AND STEP BY STEP. MAKE SURE TO FOLLOW THIS RULE.
{
  "title": "Recipe name",
  "shortDescription": "IMPORTANT: Short description need to be in three lines long but without any line breaks",
  "longDescription": "Longer description all on one line without any line breaks",
  "duration": "one hour and thirty minutes",
  "ingredients": [
    {"item": "Ingredient 1", "quantity": "Amount 1"},
    {"item": "Ingredient 2", "quantity": "Amount 2"}
  ],
  "instructions": [
    "Instruction 1 on a single line",
    "Instruction 2 on a single line"
  ],
  "enjoyMessage": "Enjoy message on one line"
}

REMEMBER: This JSON will be parsed programmatically, not read by humans. Formatting for human readability with newlines will break the parser.`;

    const response = await fetch("https://llm.chutes.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "chutesai/Llama-4-Maverick-17B-128E-Instruct-FP8", // Or your preferred model
        messages: [
          {
            role: "system",
            content: systemPrompt, // Added system prompt
          },
          {
            role: "user",
            content: userMessage, // Use the message from the request
          },
        ],
        // "stream": true, // Handling streams requires more complex logic on the client and server
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text(); // Read error response as text
      console.error("Chutes AI API Error:", response.status, errorData);
      return NextResponse.json(
        {
          error: `API request failed: ${response.statusText}`,
          details: errorData,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    // console.log(data.choices[0].message);

    // console.log("Chutes AI API raw response:", data);

    // Parse the concatenated JSON string into an array of objects
    const rawContent = data.choices[0].message.content;
    // console.log("Raw content from AI:", rawContent); // Keep for debugging if needed

    let recipes = [];
    try {
      // Split by the intended separator for full recipe objects
      const potentialRecipeStrings = rawContent.trim().split("\n\n");

      recipes = potentialRecipeStrings
        .map((jsonString) => {
          const trimmedString = jsonString.trim();
          // Ensure the string looks like a JSON object before trying to parse
          if (trimmedString.startsWith("{") && trimmedString.endsWith("}")) {
            try {
              // Attempt to parse the likely recipe object string
              return JSON.parse(trimmedString);
            } catch (parseError) {
              console.error(
                "Error parsing recipe JSON string:",
                parseError.message
              );
              console.error("Problematic string:", trimmedString); // Log the string that failed
              return null;
            }
          } else if (trimmedString.length > 0) {
            // Log if a non-empty string fragment didn't look like a JSON object
            console.warn("Skipping non-object string fragment:", trimmedString);
          }
          return null; // Return null for non-objects or strings that failed checks
        })
        .filter((recipe) => recipe !== null); // Filter out nulls

      if (recipes.length === 0 && rawContent.trim().length > 0) {
        console.warn(
          "AI response received, but failed to parse any valid recipes from:",
          rawContent
        );
      }

      console.log(recipes);
      // console.log("Successfully parsed recipes:", recipes);
      return NextResponse.json(recipes);
    } catch (processError) {
      // Catch errors during split or other processing steps
      console.error("Error processing Chutes AI response:", processError);
      console.error("Raw content was:", rawContent);
      return NextResponse.json(
        { error: "Failed to process recipe data from AI response" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
