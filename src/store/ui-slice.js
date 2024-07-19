import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
    notification: null,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        changeNotification(state, action) {
            state.notification = { ...action.payload }
        },
    }
})

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;