import { cn } from "@/lib/cn";
import Cancel from "@assets/icons/cancel.svg";
import CheckFill from "@assets/icons/check-fill.svg";
import type { ReactNode } from "react";

type CommonChipProps = {
  label: string;
  icon?: ReactNode;
  selected?: boolean;
  checkFill?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
};

const CommonChip = ({
  label,
  icon,
  selected,
  checkFill,
  onClick,
  onRemove,
  className,
}: CommonChipProps) => {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={onClick ? selected : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={cn(
        "flex relative cursor-pointer items-center gap-8pxr px-12pxr py-8pxr border border-ui-200 bg-ui-50 rounded-full transition-colors hover:border-primary active:border-primary",
        { "border-primary": selected || checkFill },
        className,
      )}>
      {icon && (
        <span aria-hidden className="flex items-center justify-center w-20pxr h-20pxr shrink-0 [&>svg]:max-w-full [&>svg]:max-h-full">
          {icon}
        </span>
      )}
      <span className="text-caption1-md">{label}</span>
      {checkFill && icon && (
        <CheckFill aria-hidden className="text-ui-50 absolute -left-4pxr -top-4pxr h-16pxr w-16pxr" />
      )}
      {onRemove && (
        <button
          type="button"
          className="text-ui-600"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label="삭제">
          <Cancel aria-hidden className="h-9pxr w-9pxr m-3pxr" />
        </button>
      )}
    </div>
  );
};

export default CommonChip;
