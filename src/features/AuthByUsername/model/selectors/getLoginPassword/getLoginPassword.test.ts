import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginPassword } from "./GetLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "123",
            },
        };
        expect(GetLoginPassword(state as StateSchema)).toEqual("123");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(GetLoginPassword(state as StateSchema)).toEqual("");
    });
});
