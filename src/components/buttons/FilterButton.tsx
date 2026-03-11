import { cn } from "@/lib/cn";

type FilterButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
};
const FilterButton = ({
  label,
  onClick,
  className,
  "aria-label": ariaLabel,
}: FilterButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex justify-center items-center cursor-pointer text-label1-md p-10pxr w-60pxr h-36pxr rounded-8pxr",
        className,
      )}
      onClick={onClick}
      aria-label={ariaLabel}>
      {label}
    </button>
  );
};

export default FilterButton;
