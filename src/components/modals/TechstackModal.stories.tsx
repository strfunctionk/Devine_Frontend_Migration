import type { Meta, StoryObj } from "@storybook/nextjs";
import TechstackModal from "./TechstackModal";

const meta = {
  component: TechstackModal,
  tags: ["autodocs"],
} satisfies Meta<typeof TechstackModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
