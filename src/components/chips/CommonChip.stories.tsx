import type { Meta, StoryObj } from "@storybook/nextjs";
import { TECH_BADGE_ICON, TECH_LABEL } from "@/constants/techstack";
import CommonChip from "./CommonChip";

const meta = {
  component: CommonChip,
  tags: ["autodocs"],
  args: {
    label: "텍스트",
  },
} satisfies Meta<typeof CommonChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── 기본 ──────────────────────────────────────────────
export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const WithRemove: Story = {
  args: { onRemove: () => {} },
};

export const SelectedWithRemove: Story = {
  args: { selected: true, onRemove: () => {} },
};

// ── 아이콘 (커스텀 SVG) ────────────────────────────────
const BoxIcon = (
  // 20x20보다 큰 SVG로 클램핑 테스트
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="currentColor" />
  </svg>
);

export const WithIcon: Story = {
  args: { icon: BoxIcon },
};

export const WithIconSelected: Story = {
  args: { icon: BoxIcon, selected: true },
};

export const WithIconAndRemove: Story = {
  args: { icon: BoxIcon, onRemove: () => {} },
};

export const WithIconSelectedAndRemove: Story = {
  args: { icon: BoxIcon, selected: true, onRemove: () => {} },
};

// ── CheckFill 뱃지 (icon 필수) ─────────────────────────
export const CheckFill: Story = {
  args: { icon: BoxIcon, checkFill: true },
};

// ── 테크스택 뱃지 ─────────────────────────────────────
export const Javascript: Story = {
  args: {
    label: TECH_LABEL.JAVASCRIPT,
    icon: TECH_BADGE_ICON.JAVASCRIPT,
  },
};

export const JavascriptSelected: Story = {
  args: {
    label: TECH_LABEL.JAVASCRIPT,
    icon: TECH_BADGE_ICON.JAVASCRIPT,
    selected: true,
  },
};

export const JavascriptCheckFill: Story = {
  args: {
    label: TECH_LABEL.JAVASCRIPT,
    icon: TECH_BADGE_ICON.JAVASCRIPT,
    checkFill: true,
  },
};

export const JavascriptWithRemove: Story = {
  args: {
    label: TECH_LABEL.JAVASCRIPT,
    icon: TECH_BADGE_ICON.JAVASCRIPT,
    onRemove: () => {},
  },
};

export const SpringBoot: Story = {
  args: {
    label: TECH_LABEL.SPRINGBOOT,
    icon: TECH_BADGE_ICON.SPRINGBOOT,
  },
};

export const Docker: Story = {
  args: {
    label: TECH_LABEL.DOCKER,
    icon: TECH_BADGE_ICON.DOCKER,
  },
};
