import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import SearchInput from "./SearchInput";

const InteractiveSearchInput = (
  args: React.ComponentProps<typeof SearchInput>,
) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <SearchInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const meta = {
  component: SearchInput,
  tags: ["autodocs"],
  render: (args: React.ComponentProps<typeof SearchInput>) => (
    <InteractiveSearchInput {...args} />
  ),
  args: {
    placeholder: "검색어를 입력하세요",

  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "React",
  },
};

export const NoPlaceholder: Story = {
  args: {
    placeholder: undefined,
  },
};
