import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className="block text-2xl font-[400] border-[1px] border-gray-300 bg-gray-50/50 mx-auto p-2 px-3 rounded-[8px]"
      {...props}
    />
  );
}

export { Input };
