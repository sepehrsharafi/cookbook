"use client";

import Header from "@/components/ui/header";
import Suggestion from "@/components/ui/suggestion";
import { useIngredientContext } from "@/store/ingredient-context";
import Loading from "./loading"; // Keep Loading component

export default function Page() {
  // Only get recipes from context. setRecipes is called by the main page.
  const { recipes } = useIngredientContext();

  // Hardcoded image URLs remain the same
  const imageUrls = ["/ghorme-sabzi.jpg", "/خورشت-قیمه.jpg"];

  let content;
  if (recipes === null || recipes === undefined) {
    content = <Loading />;
  } else if (Array.isArray(recipes) && recipes.length > 0) {
    // recipes is a non-empty array, display suggestions
    content = recipes.map((suggestion, idx) => (
      <>
        <Suggestion
          key={suggestion.id || idx}
          id={suggestion.id || idx + 1}
          imgURL={imageUrls[idx % imageUrls.length]}
          title={suggestion.title}
          duration={suggestion.duration || ""}
          description={suggestion.shortDescription || ""}
        />{" "}
        <hr className="bg-[#E2E8F0] h-[2px] mx-8 rounded-full" />
      </>
    ));
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
