"use client";

import IngredientItem from "./ingredients";
import { useIngredientContext } from "../../store/ingredient-context";

export default function SelectedIngredients() {
  const { ingredients, removeIngredient } = useIngredientContext();

  const toDelete = (item) => {
    removeIngredient(item);
  };

  return (
    <section className="w-full">
      <div className="flex flex-row items-baseline gap-2">
        <h1 className="font-[550] text-xl mr-3 text-right mb-4">
          مواد اولیه شما
        </h1>
        <h2 className="font-[450] text-md text-right text-red-600 mb-4">
          برای پاک کردن ضربه بزنید
        </h2>
      </div>
      <div className="bg-white border-[1px] border-[#CBD5E1] p-3 rounded-lg flex flex-wrap gap-2 text-right">
        {ingredients.length === 0 ? (
          <div className="h-[38px] flex flex-row items-center">
            <span className="text-slate-400 font-normal text-lg">
              هیچ ماده‌ای انتخاب نشده است
            </span>
          </div>
        ) : (
          ingredients.map((item, idx) => (
            <IngredientItem key={idx} title={item} toDelete={toDelete} />
          ))
        )}
      </div>
    </section>
  );
}
