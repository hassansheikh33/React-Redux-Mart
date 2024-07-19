import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: 1,
      title: "Hamburger",
      price: 10,
      description: "This is a first product - amazing!",
      qty: 1,
    },
    {
      id: 2,
      title: "Pizza",
      price: 15,
      description: "This is a second product - super amazing!",
      qty: 1,
    },
    {
      id: 3,
      title: "Beef Burger",
      price: 6,
      description: "This is a third product - TASTY!",
      qty: 1,
    },
    {
      id: 4,
      title: "Dummy Product",
      price: 3,
      description: "This is a fourth product - TASTY!",
      qty: 1,
    },
    {
      id: 5,
      title: "ABC",
      price: 21,
      description: "This is a fifth product - TASTY!",
      qty: 1,
    },
    {
      id: 6,
      title: "XYZ",
      price: 12,
      description: "This is the last product - TASTY!",
      qty: 1,
    },
  ];

  const productListItems = products.map((item) => (
    <ProductItem key={item.id} item={item}></ProductItem>
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productListItems}</ul>
    </section>
  );
};

export default Products;
