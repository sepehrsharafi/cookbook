"use client";

import React, { createContext, useState, useContext } from "react";

// Create the context
const IngredientContext = createContext();

// Provider component
export function IngredientProvider({ children }) {
  const [ingredients, setIngredients] = useState([]);

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

  return (
    <IngredientContext.Provider
      value={{ ingredients, addIngredient, removeIngredient }}
    >
      {children}
    </IngredientContext.Provider>
  );
}

// Custom hook for easy access
export function useIngredientContext() {
  return useContext(IngredientContext);
}
