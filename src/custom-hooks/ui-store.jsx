import { initStore } from "./useStore";

export default function configureUiStore() {
  const storeActions = {
    toggleCart(currentState) {
      currentState.ui.showCart = !currentState.ui.showCart;
    },
    changeNotification(currentState, payload) {
      currentState.ui.notification = { ...payload };
    },
  };

  const initialState = {
    ui: {
      showCart: false,
      notification: null,
    },
  };

  initStore(storeActions, initialState);
}
