import { Vazirmatn } from "next/font/google";

export const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
  weight: "variable", // Allows arbitrary font weights
  variable: "--font-vazirmatn", // CSS variable name
});
