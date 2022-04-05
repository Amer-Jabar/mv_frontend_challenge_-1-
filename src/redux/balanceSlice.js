import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        balance: 100
    },
    reducers: {
        deposit: (state, actions) => {
            state.balance += actions.payload
        },
        withdraw: (state, actions) => {
            state.balance -= actions.payload
        },
    }
})

export const { deposit, withdraw } = balanceSlice.actions;

export default balanceSlice.reducer;