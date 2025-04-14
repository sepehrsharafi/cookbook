"use client";

import { usePathname, redirect } from "next/navigation";

export default function Header({ placeholder, route }) {
  const pathName = usePathname();

  const goToThePreviousPage = () => {
    redirect(pathName.replace(route, ``));
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-[4px] flex flex-row items-center h-[70px] border-b-[1px] border-[#E2E8F0] px-5 gap-[10px]">
        <button
          onClick={goToThePreviousPage}
          className="p-2 bg-white/90 rounded-[6px] border-[2px] border-[#E2E8F0]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="black"
              strokeWidth="2.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="black"
              strokeWidth="2.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-xl font-[450]">{placeholder}</span>
      </header>
      <div className="h-[70px]" />
    </>
  );
}
