import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: "Title",
        text: "Text",
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Title",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Text",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Title",
        text: "Text",
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
