import Link from "next/link";
import { cn } from "@/lib/cn";

type TextButtonProps = {
  label: string;
  href: string;
  isActive?: boolean;
  underline?: boolean;
  className?: string;
};

const TextButton = ({
  label,
  href,
  isActive = false,
  underline = false,
  className,
}: TextButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex group relative shrink-0 cursor-pointer whitespace-nowrap px-8pxr py-5pxr text-body1-sb transition-all duration-150 ease-out hover:text-ui-800",
        {
          "text-ui-800": isActive,
          "text-ui-400": !isActive,
        },
        className,
      )}>
      {label}
      {underline && (
        <span
          className="text-button-underline"
          data-active={isActive || undefined}
        />
      )}
    </Link>
  );
};

export default TextButton;
