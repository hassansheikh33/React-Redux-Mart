import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalNumItems: 0,
    totalAmount: 0,
    changed: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.totalAmount = state.totalAmount + action.payload.price;
            state.totalNumItems = state.totalNumItems + 1;
            state.changed = true;
            const existingIndex = state.cartItems.findIndex(item => action.payload.id === item.id);
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = { ...state.cartItems[existingIndex], qty: state.cartItems[existingIndex].qty + 1 }
            }
            else {
                state.cartItems.push(action.payload);
            }
        },
        decreaseCount(state, action) {
            state.changed = true;
            state.totalAmount = state.totalAmount - action.payload.price;
            state.totalNumItems = state.totalNumItems - 1;
            const updateIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (state.cartItems[updateIndex].qty === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            }
            else {
                state.cartItems[updateIndex] = { ...state.cartItems[updateIndex], qty: state.cartItems[updateIndex].qty - 1 }
            }
        },
        loaded(state, action) {
            state.cartItems = action.payload.items;
            state.totalAmount = action.payload.amount;
            state.totalNumItems = action.payload.numItems;
        },

    }
})



export default cartSlice.reducer;
export const cartActions = cartSlice.actions;