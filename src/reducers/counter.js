import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0, userInfo: { uname: 'dd' } }
const counter = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            (state.value) ? state.value -= 1 : state.value = state.value
        },
        reset: (state) => {
            state.value = initialState.value
        },
        incrementByAmount: (state, { payload }) => {
            state.value += payload
        },
        addUserInfo: (state, { payload }) => {
            return {
                ...state, userInfo: payload
            }
        },
    }
})

export const { increment, decrement, reset, incrementByAmount, addUserInfo } = counter.actions
export default counter.reducer