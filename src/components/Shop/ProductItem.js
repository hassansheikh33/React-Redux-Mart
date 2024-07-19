import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../store/cart-slice";
import useStore from "../../custom-hooks/useStore";

const ProductItem = (props) => {
  const dispatch = useStore()[1];
  // const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch("addToCart", {
      id: props.item.id,
      title: props.item.title,
      price: props.item.price,
      qty: props.item.qty,
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.item.title}</h3>
          <div className={classes.price}>${props.item.price.toFixed(2)}</div>
        </header>
        <p>{props.item.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
