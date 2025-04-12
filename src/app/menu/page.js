"use client";
import Header from "@/components/ui/header";
import Suggestion from "@/components/ui/suggestion";
import { useIngredientContext } from "@/store/ingredient-context";
import Loading from "./loading";

export default function Page() {
  const { recipes } = useIngredientContext();

  // Hardcoded image URLs to use for suggestions (do not use AI images)
  const imageUrls = [
    "/ghorme-sabzi.jpg",
    "/خورشت-قیمه.jpg",
    // Add more if you want to support more suggestions
  ];

  return (
    <>
      <Header placeholder="برگشت به صفحه اصلی" route={"menu"} />
      <main className="flex flex-col gap-6 mb-5">
        {recipes && recipes.suggestions && recipes.suggestions.length > 0 ? (
          recipes.suggestions.map((suggestion, idx) => (
            <Suggestion
              key={idx}
              id={idx + 1}
              imgURL={imageUrls[idx % imageUrls.length]}
              title={suggestion.title}
              duration={suggestion.duration || ""}
              description={suggestion.shortDescription || ""}
            />
          ))
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
