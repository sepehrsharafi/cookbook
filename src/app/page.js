"use client";

import DataInputForm from "../components/ui/data-input-form";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // Import useState
import SelectedIngredients from "@/components/ui/selected-Ingredients";
import { useRouter } from "next/navigation";
import { useIngredientContext } from "@/store/ingredient-context";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const { ingredients, setIngredients, setRecipes } = useIngredientContext();
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const handleClick = async () => {
    setIsLoading(true); // Start loading
    setError(null); // Reset error
    // REMOVED: setRecipes(null); - Don't clear recipes before fetch. Let context update handle it.

    try {
      // Call the internal API route to fetch the data using axios
      // Pass ingredients in the request body if needed by the API
      const res = await axios.post("/api/chat", { ingredients });
      const data = res.data; // API now returns the array of recipes directly

      // Store the fetched recipes array in context
      if (Array.isArray(data)) {
        setRecipes(data);
        // Navigate to the menu page only after successful fetch and data set
        router.push("/menu");
      } else {
        // Handle cases where API might not return an array as expected
        console.error("API did not return an array:", data);
        setError("Failed to get valid recipe suggestions.");
        setRecipes([]); // Set to empty array to stop loading on menu page
      }
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
      setError(
        err.response?.data?.error || "An error occurred while fetching recipes."
      );
      setRecipes([]); // Set to empty array on error
    } finally {
      setIsLoading(false); // Stop loading regardless of outcome
    }
  };

  return (
    <main className="container text-center mx-auto">
      {/* <HeroSection /> */}
      <DataInputForm />
      <SelectedIngredients />
      {error && <p className="text-red-500 mt-4">{error}</p>}{" "}
      {/* Display error message */}
      <div className="fixed bottom-0 left-0 w-full right-0 px-5 md:px-20 py-5">
        <Button
          className="w-full px-5 h-[56px] text-[19px] font-[450] rounded-[10px] active:bg-slate-800 disabled:opacity-50"
          onClick={handleClick}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading
            ? "در حال یافتن دستور پخت..."
            : "ببین چه غذایی میتونی بپزی!"}{" "}
          {/* Show loading text */}
        </Button>
      </div>
    </main>
  );
}
