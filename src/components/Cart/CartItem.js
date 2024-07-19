import useStore from "../../custom-hooks/useStore";
import classes from "./CartItem.module.css";
// import { useDispatch } from 'react-redux';
// import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useStore()[1];
  const total = props.item.qty * props.item.price;
  // const dispatch = useDispatch();

  function increaseCountHandler() {
    dispatch("addToCart", {
      id: props.item.id,
      title: props.item.title,
      price: props.item.price,
      qty: props.item.qty,
    });
  }

  function decreaseCountHandler() {
    dispatch("decreaseCount", props.item);
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${props.item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.qty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseCountHandler}>-</button>
          <button onClick={increaseCountHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
