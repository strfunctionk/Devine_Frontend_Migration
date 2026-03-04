import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type IconButtonProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  hover?: boolean;
  "aria-label"?: string;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon: Icon,
      onClick,
      className,
      iconClassName,
      hover = true,
      "aria-label": ariaLabel,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex p-6pxr rounded-8pxr transition-colors duration-150 items-center justify-center cursor-pointer text-ui-600",
          hover ? "bg-ui-bg hover:bg-ui-100" : "bg-transparent",
          className
        )}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <Icon className={cn("h-24pxr w-24pxr", iconClassName)} />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
