"use client";

import Link from "next/link";
import DarkLogo from "@assets/icons/logo-dark.svg";
import LightLogo from "@assets/icons/logo-light.svg";
import MobileLogo from "@assets/icons/logo-mobile.svg";
import useTheme from "@/hooks/useTheme";
import { THEME } from "@/constants/theme";
import { cn } from "@/lib/cn";

type LogoButtonProps = {
  className?: string;
  logoClassName?: string;
};

const LogoButton = ({ className, logoClassName }: LogoButtonProps) => {
  const { theme } = useTheme();

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <span className="phone:hidden">
        <MobileLogo className={logoClassName} />
      </span>
      <span className="hidden phone:block" suppressHydrationWarning>
        {theme === THEME.DARK
          ? <LightLogo className={logoClassName} />
          : <DarkLogo className={logoClassName} />
        }
      </span>
    </Link>
  );
};

export default LogoButton;
