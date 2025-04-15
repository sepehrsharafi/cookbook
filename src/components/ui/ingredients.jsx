import { PlusCircle, PlusIcon, PlusSquare } from "lucide-react";
import { useIngredientContext } from "../../store/ingredient-context";

export default function IngredientItem({ title, toDelete }) {
  return (
    <div
      onClick={() => toDelete(title)}
      className="flex items-center text-lg font-[450] px-[10px] py-1 bg-[#FDFDFD] border-[1px] border-[#CBD5E1] rounded-md"
    >
      <PlusIcon className="text-red-500 font-[900] stroke-[2] ml-1 -mr-1 transform rotate-45" />
      {title}
    </div>
  );
}
