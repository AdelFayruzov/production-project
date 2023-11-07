import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import 'app/styles/themes/dark.scss';
import 'app/styles/themes/light.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const Dark: Story = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} },
})];
