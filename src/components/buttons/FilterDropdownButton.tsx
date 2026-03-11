"use client";

import { useRef, useState } from "react";
import ChevronDownIcon from "@assets/icons/chevron-down.svg";
import { cn } from "@/lib/cn";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDropdownPosition } from "@/hooks/useDropdownPosition";
import FilterDropdown from "@/components/dropdowns/FilterDropdown";

type FilterOption = {
  label: string;
  value: string;
};

type FilterDropdownButtonProps = {
  label: string;
  options: FilterOption[];
  selectedValues?: string[];
  onApply?: (values: string[]) => void;
  columns?: 1 | 2;
  dropdownSize?: "sm" | "lg";
  className?: string;
};

const FilterDropdownButton = ({
  label,
  options,
  selectedValues = [],
  onApply,
  columns,
  dropdownSize,
  className,
}: FilterDropdownButtonProps) => {
  const resolvedSize = dropdownSize ?? (columns === 2 ? "lg" : "sm");
  const [isOpen, setIsOpen] = useState(false);
  const [pendingValues, setPendingValues] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const displayValues = isOpen ? pendingValues : selectedValues;
  const isApplied = displayValues.length > 0;

  const shown = displayValues.slice(0, 2);
  const rest = Math.max(0, displayValues.length - shown.length);
  const summaryLabel = isApplied
    ? `${shown.map((v) => options.find((o) => o.value === v)?.label ?? v).join(", ")}${rest > 0 ? "…" : ""}`
    : label;

  const open = () => {
    setPendingValues(selectedValues);
    setIsOpen(true);
  };

  const cancel = () => setIsOpen(false);

  const handleToggle = (value: string) => {
    setPendingValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleApply = () => {
    onApply?.(pendingValues);
    setIsOpen(false);
  };

  const handleReset = () => setPendingValues([]);

  const handleSelectAll = () =>
    setPendingValues(
      pendingValues.length === options.length ? [] : options.map((o) => o.value),
    );

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
        <div ref={dropdownRef} className={cn("fixed z-50", resolvedSize === "sm" ? "w-220pxr" : "w-440pxr")} style={position}>
          <FilterDropdown
            title={label}
            options={options}
            selectedValues={pendingValues}
            onToggle={handleToggle}
            onApply={handleApply}
            onReset={handleReset}
            onSelectAll={handleSelectAll}
            onClose={cancel}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
};

export default FilterDropdownButton;
