import Image from "next/image";
import Header from "../components/ui/header";
import HeroSection from "../components/ui/hero-section";
import DataInputForm from "../components/ui/data-input-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="text-center">
      <HeroSection />
      <DataInputForm />
      <Button className="text-lg xl:text-2xl 2xl:text-2xl h-fit font-[470] bg-sky-600 px-40 py-3 rounded-xl">
        Find Recipes
      </Button>
    </main>
  );
}
