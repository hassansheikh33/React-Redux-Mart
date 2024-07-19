// import { uiActions } from "./ui-slice";
// import { cartActions } from "./cart-slice";

export const sendCartData = (data, dispatch) => {
  return async () => {
    dispatch("changeNotification", {
      status: "pending",
      message: "sending cart data!",
      title: "sending request",
    });
    try {
      const response = await fetch(
        "https://http-react-cc4f7-default-rtdb.firebaseio.com/reduxCart.json",
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`An Unexpected Error Occured : ${response.statusText}`);
      }
      dispatch("changeNotification", {
        status: "success",
        message: "Sent cart data successfully!",
        title: "successfully sent",
      });
    } catch (err) {
      dispatch("changeNotification", {
        status: "error",
        message: err.message,
        title: "error occured",
      });
      console.log(err);
    }
  };
};

export const fetchCartData = (dispatch) => {
  return async () => {
    try {
      const response = await fetch(
        "https://http-react-cc4f7-default-rtdb.firebaseio.com/reduxCart.json"
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch cart: ${response.statusText}`);
      }
      const data = await response.json();
      dispatch("loaded", {
        items: data.cartItems || [],
        amount: data.totalAmount,
        numItems: data.totalNumItems,
      });
    } catch (err) {
      dispatch("changeNotification", {
        status: "error",
        message: err.message,
        title: "error occured",
      });
    }
  };
};
