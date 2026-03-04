"use client";

import NotificationIcon from "@assets/icons/alarm.svg";
import IconButton from "@/layouts/gnb/components/IconButton";

type NotificationButtonProps = {
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  hasNotification?: boolean;
};

const NotificationButton = ({
  onClick,
  className,
  iconClassName,
  hasNotification,
}: NotificationButtonProps) => {
  return (
    <div className="relative w-fit">
      {hasNotification && (
        <div className="absolute top-8pxr right-8pxr w-8pxr h-8pxr bg-primary rounded-full z-10" />
      )}
      <IconButton
        icon={NotificationIcon}
        onClick={onClick}
        className={className}
        iconClassName={iconClassName}
        aria-label="알림"
      />
    </div>
  );
};

export default NotificationButton;
