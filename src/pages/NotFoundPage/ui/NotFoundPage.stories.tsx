import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import 'app/styles/themes/dark.scss';
import 'app/styles/themes/light.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
