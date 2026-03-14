import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import TechstackTab from "./TechstackTab";

const InteractiveTechstackTab = (
  args: React.ComponentProps<typeof TechstackTab>,
) => {
  const [active, setActive] = useState(args.activeIndex ?? 0);
  return <TechstackTab {...args} activeIndex={active} onChange={setActive} />;
};

const meta = {
  component: TechstackTab,
  tags: ["autodocs"],
  render: (args: React.ComponentProps<typeof TechstackTab>) => (
    <InteractiveTechstackTab {...args} />
  ),
  args: {
    tabs: ["프론트엔드", "백엔드", "인프라"],
  },
} satisfies Meta<typeof TechstackTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoTabs: Story = {
  args: {
    tabs: ["프론트엔드", "백엔드"],
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: ["프론트엔드", "백엔드", "인프라", "디자인", "기획"],
  },
};
