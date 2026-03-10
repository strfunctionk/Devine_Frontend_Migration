import type { Meta, StoryObj } from "@storybook/nextjs";
import FilterTechstackOptionList from "./FilterTechstackOptionList";

const meta = {
  component: FilterTechstackOptionList,
  tags: ["autodocs"],
} satisfies Meta<typeof FilterTechstackOptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
