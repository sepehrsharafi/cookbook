import { useIngredientContext } from "../../store/ingredient-context";

export default function IngredientItem({ title, toDelete }) {
  return (
    <div className="flex items-center text-lg font-[450] px-[10px] py-1 bg-[#FDFDFD] border-[1px] border-[#CBD5E1] rounded-md">
      <span onClick={() => toDelete(title)} className="flex-1">
        {title}
      </span>
    </div>
  );
}
