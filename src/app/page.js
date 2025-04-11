import Image from "next/image";
import Header from "../components/ui/header";
import HeroSection from "../components/ui/hero-section";
import DataInputForm from "../components/ui/data-input-form";
import { Button } from "@/components/ui/button";
import IngredientItem from "../components/ui/ingredients"; // Use default import
import SelectedIngredients from "@/components/ui/selected-Ingredients";

export default function Home() {
  return (
    <main style={{ direction: "rtl" }} className="text-center">
      {/* <HeroSection /> */}
      <DataInputForm />

      <SelectedIngredients />
      <div className="px-5 pb-5 fixed w-full bottom-0">
        <button className="bg-slate-900 text-primary-foreground shadow-xs hover:bg-sky-700 text-lg xl:text-2xl 2xl:text-2xl h-[56px] w-full rounded-[10px] font-medium">
          ببین چه غذایی میتونی بپزی!
        </button>
      </div>
    </main>
  );
}
