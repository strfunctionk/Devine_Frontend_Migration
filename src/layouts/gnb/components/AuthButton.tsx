import Link from "next/link";
import { cn } from "@/lib/cn";

type AuthButtonProps = {
  label: string;
  href: string;
  className?: string;
};

const AuthButton = ({ label, href, className }: AuthButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "gradient-border px-12pxr py-8pxr rounded-8pxr text-label1 text-ui-900 transition duration-150 cursor-pointer",
        className,
      )}>
      {label}
    </Link>
  );
};

export default AuthButton;
