import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown";

const InteractiveFilterDropdown = (
  args: React.ComponentProps<typeof FilterDropdown>,
) => {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );

  if (args.type === "techstack") {
    return <FilterDropdown {...args} />;
  }

  return (
    <FilterDropdown {...args} selectedValues={selected} onToggle={toggle} />
  );
};

const meta = {
  component: FilterDropdown,
  tags: ["autodocs"],
  render: (args: React.ComponentProps<typeof FilterDropdown>) => (
    <InteractiveFilterDropdown {...args} />
  ),
} satisfies Meta<typeof FilterDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Filter Dropdown",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const Projects: Story = {
  args: {
    title: "프로젝트 유형",
    options: [
      { label: "전체", value: "option1" },
      { label: "웹", value: "option2" },
      { label: "모바일/앱", value: "option3" },
      { label: "게임", value: "option4" },
      { label: "블록체인", value: "option5" },
      { label: "기타", value: "option6" },
    ],
    className: "w-220pxr",
  },
};

export const Position: Story = {
  args: {
    title: "포지션",
    options: [
      { label: "전체", value: "option1" },
      { label: "프론트엔드", value: "option2" },
      { label: "백엔드", value: "option3" },
      { label: "인프라", value: "option4" },
    ],
    className: "w-220pxr",
  },
};

export const MyProjects: Story = {
  args: {
    title: "내 프로젝트",
    options: [
      { label: "전체", value: "option1" },
      { label: "A 프로젝트 이름이 들어가는 자리입니다.", value: "option2" },
      { label: "B 프로젝트 이름이 들어가는 자리입니다.", value: "option3" },
      { label: "C 프로젝트 이름이 들어가는 자리입니다.", value: "option4" },
      { label: "D 프로젝트 이름이 들어가는 자리입니다.", value: "option5" },
    ],
    className: "w-440pxr",
  },
};

export const Domain: Story = {
  args: {
    title: "도메인",
    columns: 2,
    options: [
      { label: "전체", value: "option1" },
      { label: "소셜/커뮤니티", value: "option2" },
      { label: "헬스케어", value: "option3" },
      { label: "엔터테인먼트", value: "option4" },
      { label: "핀테크", value: "option5" },
      { label: "AI/데이터", value: "option6" },
      { label: "이커머스", value: "option7" },
      { label: "기타", value: "option8" },
      { label: "교육", value: "option9" },
    ],
    className: "w-440pxr",
  },
};

export const ExpectedPeriod: Story = {
  args: {
    title: "예상 기간",
    options: [
      { label: "전체", value: "option1" },
      { label: "1개월 이하", value: "option2" },
      { label: "1~3개월", value: "option3" },
      { label: "3~6개월", value: "option4" },
      { label: "6개월 이상", value: "option5" },
    ],
    className: "w-220pxr",
  },
};

export const Techstack: Story = {
  args: {
    type: "techstack",
    title: "포지션/기술스택",
    className: "w-440pxr",
  },
};
