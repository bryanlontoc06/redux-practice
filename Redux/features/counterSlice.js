import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, payload) => {
            state.count = state.count + payload.payload;
        },
        decrement: (state, payload) => {
            if (state.count <= 0) return state.count = 0
            else state.count = state.count - payload.payload;;
        }
    }
});

console.log({counterSlice});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

