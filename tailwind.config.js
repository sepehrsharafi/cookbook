const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  safelist: [
    "fixed",
    "bottom-0",
    "w-full",
    "bg-slate-900",
    "text-primary-foreground",
    "hover:bg-sky-700",
    "text-lg",
    "xl:text-2xl",
    "2xl:text-2xl",
    "h-[56px]",
    "rounded-[10px]",
    "font-medium",
    "shadow-xs",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazirmatn)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
