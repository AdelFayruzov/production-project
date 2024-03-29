import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
