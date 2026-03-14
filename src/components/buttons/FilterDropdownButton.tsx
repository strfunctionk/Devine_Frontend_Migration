"use client";

import { useRef, useState } from "react";
import ChevronDownIcon from "@assets/icons/chevron-down.svg";
import { cn } from "@/lib/cn";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDropdownPosition } from "@/hooks/useDropdownPosition";
import FilterDropdown from "@/components/dropdowns/FilterDropdown";
import { TECH_LABEL, type TechName } from "@/constants/techstack";
import type { FilterOption } from "@/types/filter";

type CheckboxButtonProps = {
  type?: "checkbox";
  options?: FilterOption[];
  selectedValues?: string[];
  onApply?: (values: string[]) => void;
  columns?: 1 | 2;
  dropdownSize?: "sm" | "lg";
};

type TechstackButtonProps = {
  type: "techstack";
  selectedValues?: TechName[];
  onApply?: (values: TechName[]) => void;
};

type FilterDropdownButtonProps = {
  label: string;
  className?: string;
} & (CheckboxButtonProps | TechstackButtonProps);

const FilterDropdownButton = ({
  label,
  className,
  ...props
}: FilterDropdownButtonProps) => {
  const isTechstack = props.type === "techstack";
  const resolvedSize =
    !isTechstack
      ? (props.dropdownSize ?? (props.columns === 2 ? "lg" : "sm"))
      : "lg";

  const [isOpen, setIsOpen] = useState(false);
  const [pendingValues, setPendingValues] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedValues = props.selectedValues ?? [];
  const displayValues = isOpen ? pendingValues : (selectedValues as string[]);
  const isApplied = displayValues.length > 0;

  const shown = displayValues.slice(0, 2);
  const rest = Math.max(0, displayValues.length - shown.length);
  const summaryLabel = isApplied
    ? `${shown
        .map((v) =>
          isTechstack
            ? (TECH_LABEL[v as TechName] ?? v)
            : ((props as CheckboxButtonProps).options?.find((o) => o.value === v)?.label ?? v),
        )
        .join(", ")}${rest > 0 ? "…" : ""}`
    : label;

  const open = () => {
    setPendingValues(selectedValues as string[]);
    setIsOpen(true);
  };

  const cancel = () => setIsOpen(false);

  const handleToggle = (value: string) => {
    setPendingValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleApply = () => {
    if (isTechstack) {
      (props as TechstackButtonProps).onApply?.(pendingValues as TechName[]);
    } else {
      (props as CheckboxButtonProps).onApply?.(pendingValues);
    }
    setIsOpen(false);
  };

  const handleReset = () => setPendingValues([]);

  const handleSelectAll = () => {
    if (isTechstack) return;
    const options = (props as CheckboxButtonProps).options ?? [];
    setPendingValues(pendingValues.length === options.length ? [] : options.map((o) => o.value));
  };

  useClickOutside(dropdownRef, {
    onClickOutside: cancel,
    enabled: isOpen,
    excludeRef: buttonRef,
  });

  const position = useDropdownPosition({
    anchorRef: buttonRef,
    isOpen,
  });

  return (
    <div className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => (isOpen ? cancel() : open())}
        className={cn(
          "flex max-w-260pxr cursor-pointer items-center gap-8pxr rounded-full px-16pxr py-12pxr text-heading2-sb transition-colors",
          isApplied
            ? "border border-primary bg-badge-bg-primary text-primary"
            : "border border-transparent bg-ui-100 text-ui-700",
          isOpen && !isApplied && "border-badge-bg-primary",
        )}>
        <span className="truncate">{summaryLabel}</span>
        <ChevronDownIcon
          aria-hidden
          className={cn(
            "h-24pxr w-24pxr shrink-0 transition-transform duration-150",
            {
              "rotate-180": isOpen,
              "text-primary": isApplied,
              "text-ui-700": !isApplied,
            },
          )}
        />
      </button>

      {isOpen && position && (
        <div
          ref={dropdownRef}
          className={cn("fixed z-50", resolvedSize === "sm" ? "w-220pxr" : "w-440pxr")}
          style={position}>
          {isTechstack ? (
            <FilterDropdown
              type="techstack"
              title={label}
              selectedValues={pendingValues as TechName[]}
              onToggle={(values) => setPendingValues(values)}
              onApply={handleApply}
              onReset={handleReset}
            />
          ) : (
            <FilterDropdown
              title={label}
              options={(props as CheckboxButtonProps).options ?? []}
              selectedValues={pendingValues}
              onToggle={handleToggle}
              onApply={handleApply}
              onReset={handleReset}
              onSelectAll={handleSelectAll}
              onClose={cancel}
              columns={(props as CheckboxButtonProps).columns}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FilterDropdownButton;
