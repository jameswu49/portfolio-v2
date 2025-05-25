import type { Meta, StoryObj } from "@storybook/react";
import { viewportConfig } from "@/config/storybook-viewport";
import Component from "./profile-card";

const meta = {
  component: Component,
  parameters: viewportConfig,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
