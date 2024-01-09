import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import "app/styles/themes/dark.scss";
import "app/styles/themes/light.scss";
import { Select } from "shared/ui/Select/Select";

const meta: Meta<typeof Select> = {
    title: "shared/Select",
    component: Select,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
    },
};
