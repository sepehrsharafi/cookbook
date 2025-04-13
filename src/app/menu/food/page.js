"use client";

import Table from "@/components/ui/data-table";
import Header from "@/components/ui/header";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import { useIngredientContext } from "@/store/ingredient-context";
import { useRouter } from "next/navigation"; // Import useRouter
import { useEffect } from "react"; // Import useEffect

export default function Page() {
  const { selectedRecipe } = useIngredientContext();
  const router = useRouter();

  // Redirect if no recipe is selected (e.g., direct navigation)
  useEffect(() => {
    if (!selectedRecipe) {
      // Redirect back to the menu or home page after a short delay
      // to allow context potentially load if it was a fast refresh issue.
      const timer = setTimeout(() => {
        if (!selectedRecipe) {
          // Double check after delay
          router.push("/"); // Or '/menu'
        }
      }, 100); // Short delay
      return () => clearTimeout(timer);
    }
  }, [selectedRecipe, router]);

  // Show loading if recipe is not yet available or redirecting
  if (!selectedRecipe) {
    return <Loading />;
  }

  // Pass the selected recipe to the Content component
  return (
    <>
      <Header placeholder={"برگشت به منو"} route={"food"} />
      <Suspense fallback={<Loading />}>
        <Content recipe={selectedRecipe} />
      </Suspense>
    </>
  );
}

// Content component now accepts the recipe as a prop
function Content({ recipe }) {
  // Assuming recipe structure: { imgURL, title, duration, description, ingredients, instructions }
  // Use recipe.ingredients directly if it matches Table's expected format
  // Otherwise, transform it here if needed. Assuming it matches for now.
  const ingredientsForTable = recipe.ingredients || [];
  const instructionsList = recipe.instructions || [];

  return (
    <>
      <Image
        className="w-full object-cover h-80"
        src={recipe.imgURL || "/ghorme-sabzi.jpg"} // Use dynamic image, fallback if needed
        width={1000}
        height={1000}
        alt={recipe.title || "Food image"} // Dynamic alt text
      />
      <section className="mx-5 my-4 gap-3 flex flex-col items-start">
        <h1 className="text-[23px] font-medium h-auto min-h-[30px]">
          {" "}
          {/* Allow height to adjust */}
          {recipe.title || "نام غذا"} {/* Dynamic title */}
        </h1>
        {recipe.duration && ( // Conditionally render duration
          <div className="flex flex-row-reverse gap-2 items-center">
            <span className="text-[17px] font-[450] h-[20px]">
              {recipe.duration} {/* Dynamic duration */}
            </span>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0002 22.7501C17.7866 22.7501 21.6668 18.8699 21.6668 14.0834C21.6668 9.29695 17.7866 5.41675 13.0002 5.41675C8.21369 5.41675 4.3335 9.29695 4.3335 14.0834C4.3335 18.8699 8.21369 22.7501 13.0002 22.7501Z"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 9.75V14.0833L15.1667 16.25"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.4165 3.25L2.1665 6.5"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.8335 6.5L20.5835 3.25"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.50016 20.5833L4.3335 22.7499"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 20.5833L21.6667 22.7499"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        <p className="text-[18px] font-normal">
          {recipe.description || "توضیحات غذا در اینجا قرار می‌گیرد."}{" "}
          {/* Dynamic description */}
        </p>
      </section>

      <hr className="bg-[#E2E8F0] h-[2px] my-4 mx-8 rounded-full" />

      {/* Pass dynamic ingredients to the Table */}
      <Table source={ingredientsForTable} />

      <hr className="bg-[#E2E8F0] h-[2px] my-4 mx-8 rounded-full" />

      {/* Display dynamic instructions */}
      {instructionsList.length > 0 && (
        <section>
          <h1 className="text-[19px] font-medium mx-5 mb-2">طرز تهیه:</h1>
          <div className="mx-5">
            <ol
              style={{ listStyle: "arabic-indic", listStylePosition: "inside" }}
              className="text-lg font-normal list-decimal space-y-2" // Added space-y-2 for better readability
              lang="fa"
            >
              {instructionsList.map((step, index) => (
                <li key={index}>{step}</li> // Render each instruction step
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Removed redundant sections like second "طرز تهیه" and "نوش جان" unless they are part of dynamic data */}

      {/* Optional: Add a "نوش جان" section if desired */}
      <section className="mx-5 my-7">
        {/* <p className="text-[22px] font-medium">نوش جان! </p> */}
        <p className="text-[22px] font-medium">
          {recipe.enjoyMessage || "نوش جان!"}
        </p>
      </section>
    </>
  );
}
