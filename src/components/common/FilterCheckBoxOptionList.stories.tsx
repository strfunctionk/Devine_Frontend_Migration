import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import FilterCheckBoxOptionList from "@/components/common/FilterCheckBoxOptionList";
import type { FilterCheckBoxOption } from "@/components/common/FilterCheckBoxOptionList";

const InteractiveFilterCheckBoxOptionList = (
  args: React.ComponentProps<typeof FilterCheckBoxOptionList>,
) => {
  const [selected, setSelected] = useState<string[]>(args.selectedValues ?? []);
  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  const selectAll = () =>
    setSelected((prev) =>
      prev.length === args.options.length
        ? []
        : args.options.map((o) => o.value),
    );
  return (
    <FilterCheckBoxOptionList
      {...args}
      selectedValues={selected}
      onToggle={toggle}
      onSelectAll={selectAll}
    />
  );
};

const defaultOptions: FilterCheckBoxOption[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const meta = {
  component: FilterCheckBoxOptionList,
  tags: ["autodocs"],
  render: (args: React.ComponentProps<typeof FilterCheckBoxOptionList>) => (
    <InteractiveFilterCheckBoxOptionList {...args} />
  ),
  args: {
    options: defaultOptions,
  },
} satisfies Meta<typeof FilterCheckBoxOptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPreSelected: Story = {
  args: {
    selectedValues: ["option1", "option3"],
  },
};

export const AllSelected: Story = {
  args: {
    selectedValues: ["option1", "option2", "option3"],
  },
};

export const Projects: Story = {
  args: {
    options: [
      { label: "웹", value: "web" },
      { label: "모바일/앱", value: "mobile" },
      { label: "게임", value: "game" },
      { label: "블록체인", value: "blockchain" },
      { label: "기타", value: "etc" },
    ],
  },
};

export const Position: Story = {
  args: {
    options: [
      { label: "프론트엔드", value: "frontend" },
      { label: "백엔드", value: "backend" },
      { label: "인프라", value: "infra" },
    ],
  },
};

export const Domain: Story = {
  args: {
    columns: 2,
    options: [
      { label: "소셜/커뮤니티", value: "social" },
      { label: "헬스케어", value: "healthcare" },
      { label: "엔터테인먼트", value: "entertainment" },
      { label: "핀테크", value: "fintech" },
      { label: "AI/데이터", value: "ai" },
      { label: "이커머스", value: "ecommerce" },
      { label: "교육", value: "education" },
      { label: "기타", value: "etc" },
    ],
    className: "w-440pxr",
  },
};
