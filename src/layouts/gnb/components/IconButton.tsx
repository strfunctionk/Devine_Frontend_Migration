import { cn } from "@/lib/cn";

type IconButtonProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  hover?: boolean;
  "aria-label"?: string;
};

const IconButton = ({
  icon: Icon,
  onClick,
  className,
  iconClassName,
  hover = true,
  "aria-label": ariaLabel,
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        "flex h-36pxr w-36pxr rounded-8pxr transition-colors duration-150 items-center justify-center cursor-pointer",
        hover ? "bg-ui-bg hover:bg-ui-100" : "bg-transparent",
        className,
      )}
      aria-label={ariaLabel}
      onClick={onClick}>
      <Icon className={cn("h-full w-full", iconClassName)} />
    </button>
  );
};

export default IconButton;
