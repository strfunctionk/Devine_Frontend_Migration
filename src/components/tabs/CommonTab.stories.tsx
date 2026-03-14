import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import CommonTab from "./CommonTab";

const meta = {
  component: CommonTab,
  tags: ["autodocs"],
  args: {
    value: "project",
    onChange: () => undefined,
    items: [],
  },
} satisfies Meta<typeof CommonTab>;

export default meta;
type Story = StoryObj<typeof meta>;

function TwoTabsDemo() {
  const [value, setValue] = useState("project");
  return (
    <CommonTab
      value={value}
      onChange={setValue}
      items={[
        { value: "project", label: "프로젝트" },
        { value: "developer", label: "개발자" },
      ]}
    />
  );
}

function WithCountDemo() {
  const [value, setValue] = useState("project");
  return (
    <CommonTab
      value={value}
      onChange={setValue}
      items={[
        { value: "project", label: "제안한 개발자" },
        { value: "developer", label: "개발자 지원 현황", count: 12 },
      ]}
    />
  );
}

function ThreeTabsDemo() {
  const [value, setValue] = useState("pm");
  return (
    <CommonTab
      value={value}
      onChange={setValue}
      items={[
        { value: "pm", label: "PM" },
        { value: "dev", label: "개발자" },
        { value: "design", label: "디자이너" },
      ]}
    />
  );
}

export const Default: Story = {
  render: () => <TwoTabsDemo />,
};

export const ThreeTabs: Story = {
  render: () => <ThreeTabsDemo />,
};

export const WithCount: Story = {
  render: () => <WithCountDemo />,
};
