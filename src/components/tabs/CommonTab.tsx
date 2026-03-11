"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TabItem<T extends string> = {
  value: T;
  label: ReactNode;
  count?: number;
};

type CommonTabProps<T extends string> = {
  value: T;
  onChange: (v: T) => void;
  items: TabItem<T>[];
  className?: string;
  itemClassName?: string;
};

export default function CommonTab<T extends string>({
  value,
  onChange,
  items,
  className,
  itemClassName,
}: CommonTabProps<T>) {
  return (
    <div role="tablist" className={cn("flex gap-x-8pxr", className)}>
      {items.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t.value)}
            className={cn(
              "group flex items-center gap-8pxr cursor-pointer rounded-full border-2 px-24pxr py-12pxr transition text-my-tab-text",
              {
                "bg-my-tab-active border-transparent": active,
                "border-my-tab-border bg-my-tab-inactive": !active,
              },
              itemClassName,
            )}>
            <span
              className={cn("text-headline1-sb transition", {
                "text-tab-bg-active": active,
                "group-hover:text-tab-text-active": !active,
              })}>
              {t.label}
            </span>
            {t.count !== undefined && (
              <span
                className={cn(
                  "inline-flex items-center justify-center min-w-24pxr h-22pxr px-6pxr rounded-full bg-ui-700 text-caption1-bd mt-1pxr transition",
                  {
                    "text-tab-bg-active": active,
                    "group-hover:text-tab-bg-active": !active,
                  },
                )}>
                {t.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
