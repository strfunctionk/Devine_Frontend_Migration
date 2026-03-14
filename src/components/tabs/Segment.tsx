"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type SegmentProps = {
  label: string;
  isActive: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
};

const segmentClassName = (isActive: boolean, className?: string) =>
  cn(
    "cursor-pointer rounded-12pxr w-160pxr text-title3-bd py-8pxr px-20pxr text-center font-semibold transition-colors",
    {
      "bg-tab-bg-active text-tab-text-active shadow-segment": isActive,
      "text-tab-text-inactive hover:text-tab-text-active": !isActive,
    },
    className,
  );

export default function Segment({
  label,
  isActive,
  onClick,
  href,
  className,
}: SegmentProps) {
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={segmentClassName(isActive, className)}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
      className={segmentClassName(isActive, className)}>
      {label}
    </button>
  );
}
