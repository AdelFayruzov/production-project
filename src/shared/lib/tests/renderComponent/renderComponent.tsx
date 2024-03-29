import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore, StateSchema } from "app/providers/StoreProvider";
import { Provider } from "react-redux";
import i18nForTests from "../../../config/i18n/i18nForTests";

export interface RenderComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
    const {
        route = "/",
        initialState,
    } = options;

    const store = createReduxStore(initialState as StateSchema);

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Provider store={store}>
                <I18nextProvider
                    i18n={i18nForTests}
                >
                    {component}
                </I18nextProvider>
            </Provider>
        </MemoryRouter>,
    );
}
