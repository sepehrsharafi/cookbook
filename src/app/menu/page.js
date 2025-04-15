"use client";
import React, { useEffect, useState } from "react"; // Import useEffect, useState
import Header from "@/components/ui/header";
import Suggestion from "@/components/ui/suggestion";
import { useIngredientContext } from "@/store/ingredient-context";
import Loading from "./loading";
import { fetchData } from "../../app/actions"; // Import fetchData action

export default function Page() {
  const { ingredients, recipes, setRecipes } = useIngredientContext(); // Get ingredients and setRecipes
  const [isLoading, setIsLoading] = useState(false); // Local loading state
  const [error, setError] = useState(null); // Local error state

  // Fetch data on mount if recipes aren't already loaded in context
  useEffect(() => {
    // Check if recipes are null/undefined AND ingredients are available
    if (
      (recipes === null || recipes === undefined) &&
      ingredients &&
      ingredients.length > 0
    ) {
      const loadRecipes = async () => {
        setIsLoading(true);
        setError(null);
        const result = await fetchData(ingredients);
        if (result.success) {
          setRecipes(result.data);
        } else {
          setError(result.error || "Failed to fetch recipes.");
          setRecipes([]); // Set to empty array on error to stop potential infinite loading
        }
        setIsLoading(false);
      };
      loadRecipes();
    } else if (recipes === null && (!ingredients || ingredients.length === 0)) {
      // Handle case where user lands here directly without ingredients
      setError("No ingredients selected to find recipes.");
      setRecipes([]); // Ensure recipes isn't null
    }
    // Dependency array: Run when ingredients or recipes context value changes,
    // but the logic inside prevents re-fetching if recipes are already loaded.
  }, [ingredients, recipes, setRecipes]);

  // Hardcoded image URLs remain the same
  const imageUrls = ["/ghorme-sabzi.jpg", "/خورشت-قیمه.jpg"];

  let content;
  // Prioritize loading and error states
  if (isLoading) {
    content = <Loading />;
  } else if (error) {
    content = <p className="text-center text-red-500 mt-10">{error}</p>;
  } else if (Array.isArray(recipes) && recipes.length > 0) {
    // recipes is a non-empty array, display suggestions
    content = recipes.map((suggestion, idx) => {
      // Assign the correct image URL here before passing the object
      const suggestionWithImage = {
        ...suggestion,
        imgURL: imageUrls[idx % imageUrls.length], // Add the imgURL to the object
      };
      return (
        // Use React Fragment shorthand for the key on the outer element
        <React.Fragment key={suggestion.id || idx}>
          <Suggestion
            suggestion={suggestionWithImage} // Pass the whole object with the added imgURL
          />
          <hr className="bg-[#E2E8F0] h-[2px] mx-8 rounded-full" />
        </React.Fragment>
      );
    });
  } else {
    content = (
      <p className="text-center text-gray-500 mt-10">
        متاسفانه پیشنهادی یافت نشد. لطفا دوباره امتحان کنید.
      </p>
    );
  }

  return (
    <>
      <Header placeholder="برگشت به صفحه اصلی" route={"menu"} />
      <main className="flex flex-col gap-6 mb-5">{content}</main>
    </>
  );
}
