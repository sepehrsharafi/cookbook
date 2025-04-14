"use client";

import DataInputForm from "../components/ui/data-input-form";
import { useState } from "react";
import SelectedIngredients from "@/components/ui/selected-Ingredients";
import { redirect, useRouter } from "next/navigation";
import { useIngredientContext } from "@/store/ingredient-context";
import axios from "axios";
import { GlowEffect } from "@/components/ui/glow-effect";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Home() {
  const router = useRouter();
  const { ingredients, setIngredients, setRecipes } = useIngredientContext();
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const handleClick = async () => {
    setIsLoading(true); // Start loading
    setError(null); // Reset error
    // REMOVED: setRecipes(null); - Don't clear recipes before fetch. Let context update handle it.

    router.push("/menu");

    try {
      // Call the internal API route to fetch the data using axios
      // Pass ingredients in the request body if needed by the API
      const res = await axios.post("/api/chat", { ingredients });
      const data = res.data; // API now returns the array of recipes directly

      // Add unique IDs and store the fetched recipes array in context
      if (Array.isArray(data)) {
        const recipesWithIds = data.map((recipe, index) => ({
          ...recipe,
          id: `recipe-${index}`, // Add a unique ID based on index
        }));
        setRecipes(recipesWithIds);
        // Navigate to the menu page only after successful fetch and data set
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
    <main className="flex flex-col h-full">
      <FlickeringGrid
        className="z-0 absolute size-full"
        squareSize={4}
        gridGap={6}
        color="#6666ff"
        maxOpacity={0.25}
        flickerChance={0.6}
      />
      <section className="container text-center z-10">
        {/* <HeroSection /> */}
        <div className="mt-20 flex flex-col gap-5 mx-5 p-4 bg-white rounded-2xl border-[1.5px] border-gray-300">
          <DataInputForm />

          <SelectedIngredients />
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {/* Display error message */}
        <div className="fixed bottom-0 left-0 w-full right-0 px-5 md:px-20 py-5">
          <div className="relative">
            <GlowEffect
              colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
              mode="breathe"
              blur="soft"
              duration={5}
              scale={1.1}
            />
            <button
              className="w-full px-5 h-[56px] text-[19px] font-[450] rounded-[10px] relative inline-flex items-center justify-center gap-1  bg-slate-900 py-1.5 text-sm text-zinc-50  outline-1 outline-[#fff2f21f]"
              onClick={handleClick}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading
                ? "در حال یافتن دستور پخت..."
                : "ببین چه غذایی میتونی بپزی!"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
