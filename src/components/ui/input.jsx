import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      placeholder="چه مواد اماده ای دردسترس داری؟"
      className="block w-full h-12 text-[19px] font-normal border-[1px] border-gray-300 bg-gray-50/50 p-2 rounded-[8px] placeholder:text-slate-400"
      {...props}
    />
  );
}

export { Input };
