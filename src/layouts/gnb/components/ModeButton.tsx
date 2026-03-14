"use client";

import lightIcon from "@assets/icons/mode-light.svg";
import darkIcon from "@assets/icons/mode-dark.svg";
import IconButton from "@/layouts/gnb/components/IconButton";
import useTheme from "@/hooks/useTheme";
import { THEME } from "@/constants/theme";

type ModeButtonProps = {
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

const ModeButton = ({ onClick, className, iconClassName }: ModeButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      icon={theme === THEME.DARK ? darkIcon : lightIcon}
      onClick={onClick ?? toggleTheme}
      className={className}
      iconClassName={iconClassName}
      aria-label="테마 전환"
    />
  );
};

export default ModeButton;
