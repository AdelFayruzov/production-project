import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error",
            },
        };
        expect(GetLoginError(state as StateSchema)).toEqual("error");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(GetLoginError(state as StateSchema)).toEqual(undefined);
    });
});
