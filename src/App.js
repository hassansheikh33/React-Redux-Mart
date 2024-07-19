import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification'
import { sendCartData, fetchCartData } from './store/cart-actions'
// import { cartActions } from './store/cart-slice';

let first = true;

function App() {

  const showCart = useSelector(state => state.ui.showCart);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (first) {
      first = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData({ cartItems: cart.cartItems, totalAmount: cart.totalAmount, totalNumItems: cart.totalNumItems }));
    }
  }, [cart, dispatch]);


  // useEffect(() => {
  //   async function fetchCart() {
  //   }
  //   // fetchCart();
  // }, [])

  return (<>
    {notification && <Notification title={notification.title} status={notification.status} message={notification.message} />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  </>
  );
}

export default App;
