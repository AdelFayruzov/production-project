import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>):Decorator => (Story) => (
    <StoreProvider initialState={initialState as StateSchema}>
        <Story />
    </StoreProvider>
);
