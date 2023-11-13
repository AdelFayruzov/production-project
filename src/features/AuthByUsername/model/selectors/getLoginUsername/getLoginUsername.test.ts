import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginUsername } from "./GetLoginUsername";

describe("GetLoginUsername.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "admin",
            },
        };
        expect(GetLoginUsername(state as StateSchema)).toEqual("admin");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(GetLoginUsername(state as StateSchema)).toEqual("");
    });
});
