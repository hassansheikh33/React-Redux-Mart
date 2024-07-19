import classes from "./CartButton.module.css";
// import { useDispatch } from "react-redux";
// import { uiActions } from "../../store/ui-slice";
import useStore from "../../custom-hooks/useStore";

const CartButton = () => {
  const [state, dispatch] = useStore();
  // const totalItems = useSelector(state => state.cart.totalNumItems);
  // const dispatch = useDispatch();

  function toggleCartHandler() {
    dispatch("toggleCart");
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{state.cart.totalNumItems}</span>
    </button>
  );
};

export default CartButton;
