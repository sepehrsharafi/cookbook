import Image from "next/image";
import Header from "../components/ui/header";
import HeroSection from "../components/ui/hero-section";
import DataInputForm from "../components/ui/data-input-form";
import { Button } from "@/components/ui/button";
import IngredientItem from "../components/ui/ingredients"; // Use default import
import SelectedIngredients from "@/components/ui/selected-Ingredients";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container text-center mx-auto">
      {/* <HeroSection /> */}

      <DataInputForm />
      <SelectedIngredients />

      <div className="fixed bottom-0 left-0 w-full right-0 px-5 md:px-20 py-5">
        <Link href={`/menu`}>
          <Button className="w-full px-5 h-[56px] text-[19px] font-[450] rounded-[10px] active:bg-slate-800">
            ببین چه غذایی میتونی بپزی!
          </Button>
        </Link>
      </div>
    </main>
  );
}
