import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
    title: "pages/MainPage",
    component: MainPage,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
