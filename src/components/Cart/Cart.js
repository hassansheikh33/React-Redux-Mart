import useStore from "../../custom-hooks/useStore";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
// import { useSelector } from 'react-redux';

const Cart = (props) => {
  // const cartItems = useSelector(state => state.cart.cartItems);
  // const totalAmount = useSelector(state => state.cart.totalAmount);

  const state = useStore()[0];

  const cartItems = state.cart.cartItems;
  const totalAmount = state.cart.totalAmount;

  const cartListItems = cartItems.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      item={{
        title: cartItem.title,
        price: cartItem.price,
        id: cartItem.id,
        qty: cartItem.qty,
      }}
    />
  ));

  if (cartItems.length > 0) {
    return (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{cartListItems}</ul>
        <div className={classes.total}>
          <h2>Total Amount</h2>
          <h2>${totalAmount.toFixed(2)}</h2>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className={classes.cart}>
        <h2>Your Cart Is Empty!</h2>
      </Card>
    );
  }
};

export default Cart;
