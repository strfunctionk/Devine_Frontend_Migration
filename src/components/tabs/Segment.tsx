"use client";

import { cn } from "@/lib/cn";

type SegmentProps = {
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Segment({
  label,
  isActive,
  onClick,
  className,
}: SegmentProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-12pxr w-160pxr text-title3-bd py-8pxr px-20pxr text-center font-semibold transition-colors",
        {
          "bg-tab-bg-active text-tab-text-active shadow-segment": isActive,
          "text-tab-text-inactive hover:text-tab-text-active": !isActive,
        },
        className,
      )}>
      {label}
    </button>
  );
}
