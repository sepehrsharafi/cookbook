"use client";

import { Button } from "./button";
import { Input } from "./input";
import { useRef } from "react";
import { useIngredientContext } from "../../store/ingredient-context";

export default function DataInputForm() {
  const ingredient = useRef(null);
  const { addIngredient } = useIngredientContext();

  const onsubmit = () => {
    const value = ingredient.current?.value;
    addIngredient(value);
    if (ingredient.current) {
      ingredient.current.value = "";
    }
  };

  return (
    <section className="flex flex-row w-full gap-2 bg-white z-50">
      <Input ref={ingredient} className="w-full" />
      <Button onClick={onsubmit} className="h-12 w-12 active:bg-slate-700">
        <svg
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 309.059 309.059"
          xmlSpace="preserve"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  style={{ fill: "#ffffff" }}
                  d="M280.71,126.181h-97.822V28.338C182.889,12.711,170.172,0,154.529,0S126.17,12.711,126.17,28.338 v97.843H28.359C12.722,126.181,0,138.903,0,154.529c0,15.621,12.717,28.338,28.359,28.338h97.811v97.843 c0,15.632,12.711,28.348,28.359,28.348c15.643,0,28.359-12.717,28.359-28.348v-97.843h97.822 c15.632,0,28.348-12.717,28.348-28.338C309.059,138.903,296.342,126.181,280.71,126.181z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </Button>
    </section>
  );
}
