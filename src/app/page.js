"use client";

import DataInputForm from "../components/ui/data-input-form";
import { useState } from "react";
import SelectedIngredients from "@/components/ui/selected-Ingredients";
import { redirect, useRouter } from "next/navigation";
import { useIngredientContext } from "@/store/ingredient-context";
import axios from "axios";
import { GlowEffect } from "@/components/ui/glow-effect";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { fetchData } from "./actions";

export default function Home() {
  const router = useRouter();
  const { ingredients, setIngredients, setRecipes } = useIngredientContext();
  // Removed isLoading and error states as fetch is no longer initiated here

  const handleClick = () => {
    // Navigate immediately - Fetching will be handled on the menu page
    router.push("/menu");
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
      <section className="container text-center z-10 mx-auto max-w-[700px]">
        {/* <HeroSection /> */}
        <div className="mt-20 flex flex-col gap-5 mx-5 md:mx-0 p-4 bg-white rounded-2xl border-[1.5px] border-gray-300">
          <DataInputForm />

          <SelectedIngredients />
        </div>
        <div className="fixed bottom-0 left-0 w-full right-0 px-5 md:px-0 py-5">
          <div className="container mx-auto relative max-w-[700px]">
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
              // Removed disabled state and loading text
            >
              {"ببین چه غذایی میتونی بپزی!"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
