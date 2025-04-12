import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const userMessage =
      "give me suggestions on how to make three differant kinds of pizza";

    if (!userMessage) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.CHUTES_API_TOKEN;

    if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
      console.error("Chutes AI API key is missing or not set in .env file");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const systemPrompt = `You are a cooking recipe API that provides recipes in JSON format.

## CRITICAL INSTRUCTIONS:
1. Your response must be raw, machine-readable JSON with NO ESCAPE CHARACTERS.
2. This JSON will be directly parsed by code - DO NOT include newline characters (\n) or any escape slashes.
3. Put all recipe text on single lines without line breaks.
4. DO NOT wrap your response in {"response": "..."} - just provide the direct recipe JSON.
5. Your output should be exactly like this sample (but with Farsi text):

{
  "title": "Recipe name",
  "shortDescription": "Short description all on one line",
  "longDescription": "Longer description all on one line without any line breaks",
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
        model: "deepseek-ai/DeepSeek-V3-0324", // Or your preferred model
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

    console.log(data.choices[0].message);

    // Parse and log the destructured JSON content
    let parsedContent = null;
    try {
      parsedContent = JSON.parse(data.choices[0].message.content);
      console.log("Destructured parsed content:", parsedContent);
    } catch (e) {
      console.error(
        "Failed to parse message.content as JSON",
        e,
        data.choices[0].message.content
      );
    }

    // Log the raw response as received from Chutes AI API
    console.log("Chutes AI API raw response:", data);

    // Return both the raw response and the parsed content
    return NextResponse.json({ ...data, parsedContent });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
