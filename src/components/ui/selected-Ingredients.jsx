import IngredientItem from "./ingredients";

export default function SelectedIngredients() {
  return (
    <section className="w-full px-5">
      <h1 className="font-[550] text-xl mr-3 text-right mb-4">
        مواد اولیه شما
      </h1>
      <div className="bg-white border-[1px] border-[#CBD5E1] p-3 rounded-xl flex flex-wrap gap-2 text-right">
        <IngredientItem title={"پیاز"} />
        <IngredientItem title={"فلفل"} />
        <IngredientItem title={"نان"} />
        <IngredientItem title={"زرد چوبه"} />
        <IngredientItem title={"سیر"} />
        <IngredientItem title={"نمک"} />
        <IngredientItem title={"برنج"} />
        <IngredientItem title={"گوشت"} />
        <IngredientItem title={"روغن زیتون"} />
      </div>
    </section>
  );
}
