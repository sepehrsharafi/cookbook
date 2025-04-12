"use client";
import Image from "next/image";
import Header from "../components/ui/header";
import HeroSection from "../components/ui/hero-section";
import DataInputForm from "../components/ui/data-input-form";
import { Button } from "@/components/ui/button";
import IngredientItem from "../components/ui/ingredients"; // Use default import
import SelectedIngredients from "@/components/ui/selected-Ingredients";
import { useRouter } from "next/navigation";
import { useIngredientContext } from "@/store/ingredient-context";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const { ingredients, setIngredients, setRecipes } = useIngredientContext();

  const handleClick = async () => {
    try {
      // Call the internal API route to fetch the data using axios
      const res = await axios.post("/api/chat", { ingredients });
      const data = res.data;

      // Store the full recipes object in context
      if (data.parsedContent) {
        setRecipes(data.parsedContent);
        // Optionally, set ingredients from the first suggestion for backward compatibility
        if (
          data.parsedContent.suggestions &&
          data.parsedContent.suggestions.length > 0
        ) {
          setIngredients(data.parsedContent.suggestions[0].ingredients || []);
        }
      }

      // Navigate to the menu page
      router.push("/menu");
    } catch (error) {
      // Optionally handle error (e.g., show a toast)
      console.error(error);
    }
  };

  return (
    <main className="container text-center mx-auto">
      {/* <HeroSection /> */}

      <DataInputForm />
      <SelectedIngredients />

      <div className="fixed bottom-0 left-0 w-full right-0 px-5 md:px-20 py-5">
        <Button
          className="w-full px-5 h-[56px] text-[19px] font-[450] rounded-[10px] active:bg-slate-800"
          onClick={handleClick}
        >
          ببین چه غذایی میتونی بپزی!
        </Button>
      </div>
    </main>
  );
}
