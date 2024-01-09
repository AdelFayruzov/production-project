import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
    title: "shared/Avatar",
    component: Avatar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: { src: "" },
};
