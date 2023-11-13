import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import LoginForm from "features/AuthByUsername/ui/LoginForm/LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary = {
    decorators: [StoreDecorator({
        loginForm: { username: "123", password: "123" },
    })],
};

export const Loading = {
    decorators: [StoreDecorator({
        loginForm: { isLoading: true },
    })],
};

export const Error = {
    decorators: [StoreDecorator({
        loginForm: { username: "123", password: "123", error: "Error" },
    })],
};

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
