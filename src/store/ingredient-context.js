"use client";

import React, { createContext, useState, useContext } from "react";

// Create the context
const IngredientContext = createContext();

// Provider component
export function IngredientProvider({ children }) {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState(null); // Holds the array of fetched recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Holds the recipe clicked by the user

  // Add a new ingredient to the array
  const addIngredient = (ingredient) => {
    if (ingredient && ingredient.trim() !== "") {
      setIngredients((prev) => [...prev, ingredient.trim()]);
    }
  };

  // Optionally, you can add remove/edit functions here
  const removeIngredient = (ingredient) => {
    setIngredients((prev) => prev.filter((item) => item !== ingredient));
  };

  // console.log(recipes); // Keep commented or remove if not needed
  return (
    <IngredientContext.Provider
      value={{
        ingredients,
        addIngredient,
        removeIngredient,
        setIngredients,
        recipes, // The list of all suggestions
        setRecipes,
        selectedRecipe, // The specific recipe the user clicked on
        setSelectedRecipe,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
}

// Custom hook for easy access
export function useIngredientContext() {
  return useContext(IngredientContext);
}
