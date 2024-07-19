import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { uiActions } from './store/ui-slice';
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import useStore from "./custom-hooks/useStore";
// import { cartActions } from './store/cart-slice';

let first = true;

function App() {
  const [state, dispatch] = useStore();
  const cart = state.cart;
  const ui = state.ui;

  // const showCart = useSelector(state => state.ui.showCart);
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  // const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData(dispatch));
  }, []);

  useEffect(() => {
    if (first) {
      first = false;
      return;
    }
    if (cart.changed) {
      const data = {
        cartItems: cart.cartItems,
        totalAmount: cart.totalAmount,
        totalNumItems: cart.totalNumItems,
      };
      dispatch(sendCartData(data, dispatch));
    }
  }, [cart.cartItems, cart.totalAmount, cart.totalNumItems, cart.changed]);

  return (
    <>
      {ui.notification && (
        <Notification
          title={ui.notification.title}
          status={ui.notification.status}
          message={ui.notification.message}
        />
      )}
      <Layout>
        {ui.showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
