import type { Meta, StoryObj } from "@storybook/react";
import { viewportConfig } from "@/config/storybook-viewport";
import View from "./view";

const meta = {
  component: View,
  parameters: viewportConfig,
  tags: ["autodocs"],
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof View>;

export const Default: Story = {
  args: {
    viewModel: {},
  },
};
