import { cn } from "@/lib/cn";
import SelectAllIcon from "@assets/icons/select-all.svg";
import { useState } from "react";

type SelectAllButtonProps = {
  selected?: boolean;
  onClick?: () => void;
};

const SelectAllButton = ({ selected, onClick }: SelectAllButtonProps) => {
  const [suppressHover, setSuppressHover] = useState(false);

  const handleClick = () => {
    setSuppressHover(true);
    onClick?.();
  };

  const handleMouseLeave = () => {
    setSuppressHover(false);
  };

  const showHover = !suppressHover;

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group flex items-center gap-4pxr text-label1-md",
        selected
          ? cn("text-primary", { "hover:text-ui-500": showHover })
          : cn("text-ui-500", {
              "hover:text-primary active:text-primary": showHover,
            }),
      )}>
      <SelectAllIcon
        aria-hidden
        className={cn("w-20pxr h-20pxr", {
          "text-primary": selected,
          "group-hover:text-ui-500": selected && showHover,
          "text-ui-500": !selected,
          "group-hover:text-primary group-active:text-primary":
            !selected && showHover,
        })}
      />
      전체 선택
    </button>
  );
};

export default SelectAllButton;
