"use client";

import MenuIcon from "@assets/icons/menu.svg";
import MenuClosedIcon from "@assets/icons/menu-closed.svg";
import IconButton from "@/layouts/gnb/components/IconButton";

type MenuButtonProps = {
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

const MenuButton = ({
  isOpen = false,
  onClick,
  className,
  iconClassName,
}: MenuButtonProps) => {
  return (
    <IconButton
      icon={isOpen ? MenuClosedIcon : MenuIcon}
      hover={false}
      onClick={onClick}
      className={className}
      iconClassName={iconClassName}
      aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
    />
  );
};

export default MenuButton;
