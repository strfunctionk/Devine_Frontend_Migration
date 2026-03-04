import { cn } from "@/lib/cn";
import BackIcon from "@assets/icons/back.svg";

type BackButtonProps = {
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

const BackButton = ({ onClick, className, iconClassName }: BackButtonProps) => {
  return (
    <button
      className={cn(
        "relative group flex h-48pxr w-48pxr items-center justify-center cursor-pointer",
        className,
      )}
      aria-label="뒤로가기"
      onClick={onClick}>
      <div className="absolute inset-0 rounded-full bg-ui-100 scale-0 group-hover:scale-100 transition duration-150 z-0" />
      <BackIcon
        className={cn("h-full w-full text-ui-700 z-1", iconClassName)}
      />
    </button>
  );
};

export default BackButton;
