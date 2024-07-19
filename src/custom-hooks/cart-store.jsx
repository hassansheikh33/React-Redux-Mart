import { initStore } from "./useStore";

export default function configureCartStore() {
  const actions = {
    addToCart(currentState, payload) {
      currentState.cart.totalAmount =
        currentState.cart.totalAmount + payload.price;
      currentState.cart.totalNumItems = currentState.cart.totalNumItems + 1;
      currentState.cart.changed = true;
      const existingIndex = currentState.cart.cartItems.findIndex(
        (item) => payload.id === item.id
      );
      if (existingIndex >= 0) {
        currentState.cart.cartItems[existingIndex] = {
          ...currentState.cart.cartItems[existingIndex],
          qty: currentState.cart.cartItems[existingIndex].qty + 1,
        };
      } else {
        currentState.cart.cartItems.push(payload);
      }
    },
    decreaseCount(currentState, payload) {
      currentState.cart.changed = true;
      currentState.cart.totalAmount =
        currentState.cart.totalAmount - payload.price;
      currentState.cart.totalNumItems = currentState.cart.totalNumItems - 1;
      const updateIndex = currentState.cart.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      if (currentState.cart.cartItems[updateIndex].qty === 1) {
        currentState.cart.cartItems = currentState.cart.cartItems.filter(
          (item) => item.id !== payload.id
        );
      } else {
        currentState.cart.cartItems[updateIndex] = {
          ...currentState.cart.cartItems[updateIndex],
          qty: currentState.cart.cartItems[updateIndex].qty - 1,
        };
      }
    },
    loaded(currentState, payload) {
      currentState.cart.cartItems = payload.items;
      currentState.cart.totalAmount = payload.amount;
      currentState.cart.totalNumItems = payload.numItems;
    },
  };
  const initialState = {
    cart: {
      cartItems: [],
      totalNumItems: 0,
      totalAmount: 0,
      changed: false,
    },
  };

  initStore(actions, initialState);
}
