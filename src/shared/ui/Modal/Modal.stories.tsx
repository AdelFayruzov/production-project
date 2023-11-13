import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: false,
        children: "Text",
    },
};

export const PrimaryDark: Story = {
    args: {
        isOpen: false,
        children: "Text",
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
