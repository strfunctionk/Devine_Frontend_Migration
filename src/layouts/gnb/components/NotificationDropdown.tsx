"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import AlarmIcon from "@assets/icons/alarm.svg";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDropdownPosition } from "@/hooks/useDropdownPosition";
import { cn } from "@/lib/cn";
import { formatRelativeTime } from "@/lib/formatRelativeTime";
import { NotificationItem, getNotificationPath } from "@/layouts/gnb/constants/notification";

export type { NotificationItem, NotificationSender, NotificationType } from "@/layouts/gnb/constants/notification";
export { NOTIFICATION_TYPE } from "@/layouts/gnb/constants/notification";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef?: React.RefObject<HTMLElement | null>;
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  notifications?: NotificationItem[];
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  loading?: boolean;
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  onMarkAsRead?: (notificationId: number) => void;
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  onMarkAllAsRead?: () => void;
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  hasMore?: boolean;
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  onLoadMore?: () => void;
  /** 테스트용 - 실제 사용 시 store에서 가져옴 */
  loadingMore?: boolean;
}

const NotificationDropdown = ({
  isOpen,
  onClose,
  anchorRef,
  // 테스트용 props (실제 사용 시 store에서 가져옴)
  notifications: notificationsProp,
  loading: loadingProp,
  onMarkAsRead: onMarkAsReadProp,
  onMarkAllAsRead: onMarkAllAsReadProp,
  hasMore: hasMoreProp,
  onLoadMore: onLoadMoreProp,
  loadingMore: loadingMoreProp,
}: NotificationDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // TODO: useNotificationStore 연결
  // const store = useNotificationStore();

  // Props가 있으면 props 사용 (테스트), 없으면 store 사용 (실제)
  const notifications = notificationsProp ?? []; // ?? store.notifications
  const loading = loadingProp ?? false; // ?? store.loading
  const onMarkAsRead = onMarkAsReadProp; // ?? store.markAsRead
  const onMarkAllAsRead = onMarkAllAsReadProp; // ?? store.markAllAsRead
  const hasMore = hasMoreProp ?? false; // ?? store.hasMore
  const onLoadMore = onLoadMoreProp; // ?? store.loadMore
  const loadingMore = loadingMoreProp ?? false; // ?? store.loadingMore

  const hasUnread = notifications.some((n) => !n.isRead);

  const position = useDropdownPosition({
    anchorRef: anchorRef!,
    isOpen,
    placement: "bottom-right",
  });

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useClickOutside(dropdownRef, {
    onClickOutside: handleClose,
    enabled: isOpen,
    excludeRef: anchorRef,
  });

  const handleLinkClick = (notification: NotificationItem) => {
    if (!notification.isRead && onMarkAsRead) {
      onMarkAsRead(notification.id);
    }
    handleClose();
  };

  if (!isOpen || (anchorRef && !position)) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        ref={dropdownRef}
        className={cn(
          "pointer-events-auto flex w-360pxr max-h-480pxr flex-col overflow-hidden rounded-xl border border-ui-200 bg-ui-bg shadow-lg animate-dropdown-in",
          { "absolute top-122pxr right-32pxr": !anchorRef }
        )}
        style={anchorRef && position ? { position: "fixed", ...position } : undefined}
      >
        {/* 헤더 */}
        <header className="shrink-0 flex-items-center border-b border-ui-200 bg-ui-50/50 px-16pxr py-12pxr">
          <AlarmIcon className="h-18pxr w-18pxr shrink-0" aria-hidden />
        </header>

        {/* 알림 목록 */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            // 로딩 상태
            <div className="flex-col-center py-48pxr" aria-busy="true">
              <LoadingSpinner size="md" />
            </div>
          ) : notifications.length === 0 ? (
            // 빈 상태
            <div className="flex-col-center gap-8pxr py-48pxr">
              <div className="flex-row-center h-48pxr w-48pxr rounded-full bg-ui-100">
                <AlarmIcon className="h-20pxr w-20pxr" aria-hidden />
              </div>
              <p className="text-body2-md text-ui-600">아직 새 알림이 없어요</p>
              <p className="text-body2-md text-ui-400">새 소식이 오면 여기에 표시돼요</p>
            </div>
          ) : (
            // 알림 아이템
            <ul className="flex-col gap-8pxr p-12pxr">
              {notifications.map((n, i) => (
                <li key={n.id}>
                  <Link
                    href={getNotificationPath(n.type, n.referenceId)}
                    onClick={() => handleLinkClick(n)}
                    style={{ animationDelay: `${i * 40}ms` }}
                    className={cn(
                      "animate-notification-item-in opacity-0 relative flex-col w-full gap-6pxr rounded-lg px-14pxr py-12pxr text-left transition-colors",
                      n.isRead ? "hover:bg-ui-50" : "bg-ui-50 hover:bg-ui-100"
                    )}
                  >
                    {/* 읽지 않은 알림 표시 */}
                    {!n.isRead && <span className="absolute left-4pxr top-6pxr h-10pxr w-10pxr rounded-full bg-primary" />}
                    <div className="flex-row-between gap-8pxr">
                      <h3 className={cn("flex-1 truncate text-heading4", n.isRead ? "text-ui-600" : "text-ui-900")}>
                        {n.title}
                      </h3>
                      <span className="text-label1 text-ui-400">{formatRelativeTime(n.createdAt)}</span>
                    </div>
                    <p className="line-clamp-2 text-body2-md text-ui-600">{n.content}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 더 보기 버튼 */}
        {hasMore && onLoadMore && (
          <footer className="shrink-0 border-t border-ui-200 px-12pxr py-8pxr">
            <button
              type="button"
              onClick={onLoadMore}
              disabled={loadingMore}
              className="w-full py-10pxr text-body2-md text-ui-500 hover:text-primary disabled:opacity-60"
            >
              {loadingMore ? "불러오는 중…" : "더 보기"}
            </button>
          </footer>
        )}

        {/* 전체 읽음 처리 버튼 */}
        {onMarkAllAsRead && hasUnread && (
          <footer className="shrink-0 border-t border-ui-200 bg-ui-50/30 px-12pxr py-10pxr">
            <button type="button" onClick={onMarkAllAsRead} className="w-full py-10pxr text-body2-md text-ui-500 hover:text-primary">
              전체 읽음 처리
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;
