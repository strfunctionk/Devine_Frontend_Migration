import type { Meta, StoryObj } from "@storybook/nextjs";
import { useRef, useState } from "react";
import NotificationDropdown, { NotificationItem, NOTIFICATION_TYPE } from "./NotificationDropdown";

const meta = {
  component: NotificationDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "알림 드롭다운 컴포넌트. Docs 탭에서는 iframe 렌더링으로 인해 위치가 정확하지 않을 수 있습니다. 개별 스토리에서 확인해주세요.",
      },
    },
  },
} satisfies Meta<typeof NotificationDropdown>;

export default meta;
type Story = StoryObj<typeof NotificationDropdown>;

const mockNotifications: NotificationItem[] = [
  {
    id: 1,
    type: NOTIFICATION_TYPE.MATCHING_APPLIED,
    title: "새로운 지원자가 있습니다",
    content: "김개발님이 '웹 프론트엔드 개발자 모집' 프로젝트에 지원했습니다.",
    referenceId: 1,
    sender: { id: 1, nickname: "김개발", profileImageUrl: "" },
    isRead: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    type: NOTIFICATION_TYPE.MATCHING_PROPOSED,
    title: "프로젝트 제안이 도착했습니다",
    content: "이디자인님이 '모바일 앱 리뉴얼' 프로젝트를 제안했습니다.",
    referenceId: 2,
    sender: { id: 2, nickname: "이디자인", profileImageUrl: "" },
    isRead: false,
    createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5분 전
  },
  {
    id: 3,
    type: NOTIFICATION_TYPE.MATCHING_ACCEPTED,
    title: "지원이 수락되었습니다",
    content: "지원하신 '백엔드 API 개발' 프로젝트에 합류하게 되었습니다.",
    referenceId: 3,
    sender: { id: 3, nickname: "박매니저", profileImageUrl: "" },
    isRead: true,
    createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1시간 전
  },
  {
    id: 4,
    type: NOTIFICATION_TYPE.PROJECT_MEMBER_JOINED,
    title: "새 팀원이 합류했습니다",
    content: "박매니저님이 프로젝트에 합류했습니다.",
    referenceId: 4,
    sender: { id: 3, nickname: "박매니저", profileImageUrl: "" },
    isRead: true,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3시간 전
  },
];

const DropdownWrapper = ({
  notifications,
  loading = false,
  hasMore = false,
}: {
  notifications: NotificationItem[];
  loading?: boolean;
  hasMore?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState(notifications);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMarkAsRead = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isRead: true } : item))
    );
  };

  const handleMarkAllAsRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, isRead: true })));
  };

  return (
    <div className="bg-ui-bg min-h-500pxr p-32pxr">
      <div className="flex justify-end">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg bg-ui-100 px-16pxr py-8pxr text-ui-800"
        >
          {isOpen ? "닫기" : "열기"}
        </button>
      </div>
      <NotificationDropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        notifications={items}
        anchorRef={buttonRef}
        loading={loading}
        onMarkAsRead={handleMarkAsRead}
        onMarkAllAsRead={handleMarkAllAsRead}
        hasMore={hasMore}
        onLoadMore={() => console.log("더 보기 클릭")}
      />
    </div>
  );
};

/** 알림이 있는 상태 */
export const WithNotifications: Story = {
  render: () => <DropdownWrapper notifications={mockNotifications} />,
};

/** 빈 상태 */
export const Empty: Story = {
  render: () => <DropdownWrapper notifications={[]} />,
};

/** 로딩 상태 */
export const Loading: Story = {
  render: () => <DropdownWrapper notifications={[]} loading />,
};

/** 알림 1개 */
export const SingleNotification: Story = {
  render: () => <DropdownWrapper notifications={[mockNotifications[0]]} />,
};

/** 더 보기 버튼 있음 */
export const WithLoadMore: Story = {
  render: () => <DropdownWrapper notifications={mockNotifications} hasMore />,
};
