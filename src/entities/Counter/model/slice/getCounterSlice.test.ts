import { CounterSchema } from "entities/Counter";
import { counterActions, counterReducer } from "./counterSlice";

describe("getCounterSlice.test", () => {
    test("test actions", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test("empty state", () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
