import axios from "axios"; // Ensure axios is imported

export async function fetchData(ingredients) {
  // Removed setRecipes parameter
  // Determine base URL: Use VERCEL_URL if available (on Vercel), otherwise fallback to localhost
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}` // Prepend https for Vercel URL
    : "http://localhost:3000"; // Fallback for local development
  const apiUrl = `${baseUrl}/api/chat`;

  console.log(`Fetching data from: ${apiUrl}`); // Add logging to see the URL being used

  try {
    const res = await axios.post(
      "https://cookbook-sepehrsharafis-projects.vercel.app/api/chat",
      { ingredients }
    ); // Use absolute URL
    const data = res.data; // API now returns the array of recipes directly

    // Add unique IDs and return the fetched recipes array
    if (Array.isArray(data)) {
      const recipesWithIds = data.map((recipe, index) => ({
        ...recipe,
        id: `recipe-${index}`, // Add a unique ID based on index
      }));
      // Return success and data
      return { success: true, data: recipesWithIds };
    } else {
      // Handle cases where API might not return an array as expected
      console.error("API did not return an array:", data);
      // Return failure and error message
      return {
        success: false,
        error: "Failed to get valid recipe suggestions.",
      };
    }
  } catch (err) {
    console.error("Failed to fetch recipes:", err);
    const errorMessage =
      err.response?.data?.error || "An error occurred while fetching recipes.";
    // Return failure and error message
    return { success: false, error: errorMessage };
  }
  // No finally block needed here for state setting
}
