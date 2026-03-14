import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import type { TechName } from "@/constants/techstack";
import FilterDropdownButton from "./FilterDropdownButton";

const PROJECT_TYPE_OPTIONS = [
  { label: "웹", value: "web" },
  { label: "모바일/앱", value: "mobile" },
  { label: "게임", value: "game" },
  { label: "블록체인", value: "blockchain" },
  { label: "기타", value: "etc" },
];

const DOMAIN_OPTIONS = [
  { label: "소셜/커뮤니티", value: "social" },
  { label: "헬스케어", value: "health" },
  { label: "엔터테인먼트", value: "entertainment" },
  { label: "핀테크", value: "fintech" },
  { label: "AI/데이터", value: "ai" },
  { label: "이커머스", value: "ecommerce" },
  { label: "교육", value: "education" },
  { label: "기타", value: "etc" },
];

const InteractiveDemo = (
  args: React.ComponentProps<typeof FilterDropdownButton>,
) => {
  const [selected, setSelected] = useState<string[]>([]);

  if (args.type === "techstack") {
    return (
      <FilterDropdownButton
        {...args}
        selectedValues={selected as TechName[]}
        onApply={(values) => setSelected(values)}
      />
    );
  }

  return (
    <FilterDropdownButton
      {...args}
      selectedValues={selected}
      onApply={(values) => setSelected(values)}
    />
  );
};

const meta = {
  component: FilterDropdownButton,
  tags: ["autodocs"],
  render: (args: React.ComponentProps<typeof FilterDropdownButton>) => (
    <InteractiveDemo {...args} />
  ),
  decorators: [
    (Story: React.ComponentType) => (
      <div className="p-40pxr">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FilterDropdownButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "필터",
    options: PROJECT_TYPE_OPTIONS,
  },
};

export const ProjectType: Story = {
  args: {
    label: "프로젝트 유형",
    options: PROJECT_TYPE_OPTIONS,
  },
};

export const Domain: Story = {
  args: {
    label: "도메인",
    options: DOMAIN_OPTIONS,
    columns: 2,
  },
};

const WithPreselectedDemo = (
  args: React.ComponentProps<typeof FilterDropdownButton>,
) => {
  const [selected, setSelected] = useState<string[]>(["web", "game"]);
  return (
    <FilterDropdownButton
      {...(args as React.ComponentProps<typeof FilterDropdownButton> & {
        type?: "checkbox";
      })}
      selectedValues={selected}
      onApply={(values) => setSelected(values)}
    />
  );
};

export const WithPreselected: Story = {
  render: (args) => <WithPreselectedDemo {...args} />,
  args: {
    label: "프로젝트 유형",
    options: PROJECT_TYPE_OPTIONS,
  },
};

export const Techstack: Story = {
  args: {
    type: "techstack",
    label: "포지션/기술스택",
  },
};

const TechstackWithPreselectedDemo = (
  args: React.ComponentProps<typeof FilterDropdownButton>,
) => {
  const [selected, setSelected] = useState<TechName[]>([
    "REACT",
    "TYPESCRIPT",
    "NEXTJS",
  ]);
  return (
    <FilterDropdownButton
      {...args}
      selectedValues={selected}
      onApply={(values) => setSelected(values as TechName[])}
    />
  );
};

export const TechstackWithPreselected: Story = {
  render: (args) => <TechstackWithPreselectedDemo {...args} />,
  args: {
    type: "techstack",
    label: "포지션/기술스택",
  },
};
