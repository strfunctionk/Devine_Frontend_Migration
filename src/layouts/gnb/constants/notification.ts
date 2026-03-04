export const NOTIFICATION_TYPE = {
  // 매칭 관련
  MATCHING_APPLIED: "MATCHING_APPLIED",
  MATCHING_PROPOSED: "MATCHING_PROPOSED",
  MATCHING_ACCEPTED: "MATCHING_ACCEPTED",
  MATCHING_REJECTED: "MATCHING_REJECTED",
  // 프로젝트 관련
  PROJECT_STATUS_CHANGED: "PROJECT_STATUS_CHANGED",
  PROJECT_MEMBER_JOINED: "PROJECT_MEMBER_JOINED",
} as const;

export type NotificationType = (typeof NOTIFICATION_TYPE)[keyof typeof NOTIFICATION_TYPE];

export interface NotificationSender {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface NotificationItem {
  id: number;
  type: NotificationType;
  title: string;
  content: string;
  referenceId: number;
  sender: NotificationSender;
  isRead: boolean;
  createdAt: string;
}

// TODO: 페이지 라우팅 확정 시 경로 수정
export const getNotificationPath = (type: NotificationType, referenceId: number): string => {
  switch (type) {
    // 매칭 관련
    case NOTIFICATION_TYPE.MATCHING_APPLIED:
    case NOTIFICATION_TYPE.MATCHING_PROPOSED:
    case NOTIFICATION_TYPE.MATCHING_ACCEPTED:
    case NOTIFICATION_TYPE.MATCHING_REJECTED:
      return `/matching/${referenceId}`;
    // 프로젝트 관련
    case NOTIFICATION_TYPE.PROJECT_STATUS_CHANGED:
    case NOTIFICATION_TYPE.PROJECT_MEMBER_JOINED:
      return `/projects/${referenceId}`;
    default:
      return `/notifications`;
  }
};
