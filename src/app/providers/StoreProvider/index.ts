import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

import {
    ReduxStoreWithManager, StateSchema, ThunkExtraArg, ThunkConfig,
} from "./config/StateSchema";

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
