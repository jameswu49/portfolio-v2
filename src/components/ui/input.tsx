import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  label,
  className,
  type,
  required,
  ...props
}: React.ComponentProps<"input"> & { label: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={type} className="text-xl pl-3">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "mt-2 file:text-foreground placeholder:text-xl placeholder:font-bold placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:ring-primary-foreground focus-visible:ring-[1px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
        required={required}
        {...props}
      />
    </div>
  );
}

export { Input };
