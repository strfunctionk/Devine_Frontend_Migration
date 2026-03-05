"use client";

import Check from "@assets/icons/check.svg";
import { cn } from "@/lib/cn";

type FilterCheckBoxButtonProps = {
  checked: boolean;
  onChange?: (next: boolean) => void;
  className?: string;
  "aria-label"?: string;
};

export default function FilterCheckBoxButton({
  checked,
  onChange,
  className,
  "aria-label": ariaLabel,
}: FilterCheckBoxButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      aria-label={ariaLabel}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "cursor-pointer bg-ui-bg w-20pxr h-20pxr border rounded-6pxr border-ui-300 hover:border-primary flex items-center justify-center transition-colors",
        {
          "border-primary bg-primary ": checked,
        },
        className,
      )}>
      <Check
        className={cn("transition-opacity", {
          "opacity-100": checked,
          "opacity-0": !checked,
        })}
      />
    </button>
  );
}
