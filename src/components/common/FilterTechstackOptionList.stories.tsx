import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import type { TechName } from "@/constants/techstack";
import FilterTechstackOptionList from "./FilterTechstackOptionList";

const meta = {
  component: FilterTechstackOptionList,
  tags: ["autodocs"],
  args: {
    selectedValues: [] as TechName[],
    onChange: () => {},
  },
} satisfies Meta<typeof FilterTechstackOptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

const Controlled = () => {
  const [selected, setSelected] = useState<TechName[]>([]);
  return <FilterTechstackOptionList selectedValues={selected} onChange={setSelected} />;
};

export const Default: Story = {
  render: () => <Controlled />,
};
