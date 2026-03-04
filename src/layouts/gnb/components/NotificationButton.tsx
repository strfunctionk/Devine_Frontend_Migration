"use client";

import { useRef, useState } from "react";
import NotificationIcon from "@assets/icons/alarm.svg";
import IconButton from "@/layouts/gnb/components/IconButton";
import NotificationDropdown from "./NotificationDropdown";

type NotificationButtonProps = {
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  hasUnread?: boolean;
};

const NotificationButton = ({ hasUnread: hasUnreadProp }: NotificationButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // TODO: useNotificationStore 연결
  // const store = useNotificationStore();

  // Props가 있으면 props 사용 (테스트), 없으면 store 사용 (실제)
  const hasUnread = hasUnreadProp ?? false; // ?? store.unreadCount > 0

  return (
    <>
      <div className="relative w-fit">
        {hasUnread && (
          <div className="absolute top-8pxr right-8pxr w-8pxr h-8pxr bg-primary rounded-full z-10" />
        )}
        <IconButton
          ref={buttonRef}
          icon={NotificationIcon}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="알림"
        />
      </div>
      <NotificationDropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={buttonRef}
      />
    </>
  );
};

export default NotificationButton;
