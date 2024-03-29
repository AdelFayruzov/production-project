import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
    title: "Widgets/Sidebar",
    component: Sidebar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
