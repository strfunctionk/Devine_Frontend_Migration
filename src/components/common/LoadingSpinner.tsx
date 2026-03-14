import { cn } from "@/lib/cn";

type LoadingSpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClass = {
  sm: "h-8 w-8 border-[3px]",
  md: "h-10 w-10 border-4",
  lg: "h-20 w-20 border-4",
} as const;

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  return (
    <div
      className={cn(
        "shrink-0 rounded-full border-ui-200 border-t-primary animate-spin",
        sizeClass[size],
        className
      )}
      aria-hidden
    />
  );
};

export default LoadingSpinner;
