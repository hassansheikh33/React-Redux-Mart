import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const totalItems = useSelector(state => state.cart.totalNumItems);
  const dispatch = useDispatch();

  function toggleCartHandler() {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
