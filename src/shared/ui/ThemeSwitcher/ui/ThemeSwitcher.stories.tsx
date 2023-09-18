import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import 'app/styles/themes/dark.scss';
import 'app/styles/themes/light.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
