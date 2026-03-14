import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import type { TechName } from "@/constants/techstack";
import TechStackOptionList from "./TechStackOptionList";

const InteractiveTechStackOptionList = (
  args: React.ComponentProps<typeof TechStackOptionList>,
) => {
  const [selected, setSelected] = useState<TechName[]>(
    args.selectedValues ?? [],
  );
  const toggle = (tech: TechName) =>
    setSelected((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  return (
    <TechStackOptionList
      {...args}
      selectedValues={selected}
      onToggle={toggle}
    />
  );
};

const meta = {
  component: TechStackOptionList,
  tags: ["autodocs"],
  render: (args: React.ComponentProps<typeof TechStackOptionList>) => (
    <InteractiveTechStackOptionList {...args} />
  ),
} satisfies Meta<typeof TechStackOptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Frontend: Story = {
  args: {
    title: "언어/프레임워크",
    techs: ["JAVASCRIPT", "TYPESCRIPT", "REACT", "VUEJS", "NEXTJS", "SVELTE"],
  },
};

export const Mobile: Story = {
  args: {
    title: "모바일",
    techs: ["REACT_NATIVE", "FLUTTER", "KOTLIN", "SWIFT"],
  },
};

export const BackendLanguage: Story = {
  args: {
    title: "언어",
    techs: ["JAVA", "PYTHON", "GO", "C", "KOTLIN", "PHP"],
  },
};

export const BackendFramework: Story = {
  args: {
    title: "프레임워크",
    techs: ["SPRINGBOOT", "NODEJS", "EXPRESS", "NESTJS", "DJANGO"],
  },
};

export const Database: Story = {
  args: {
    title: "데이터베이스",
    techs: ["MONGODB", "MYSQL"],
  },
};

export const Infra: Story = {
  args: {
    title: "인프라",
    techs: ["AWS", "FIREBASE", "DOCKER", "KUBERNETES"],
  },
};

export const WithPreSelected: Story = {
  args: {
    title: "언어/프레임워크",
    techs: ["JAVASCRIPT", "TYPESCRIPT", "REACT", "VUEJS", "NEXTJS", "SVELTE"],
    selectedValues: ["JAVASCRIPT", "REACT"],
  },
};
