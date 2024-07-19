import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const sendCartData = cart => {
    return async (dispatch) => {
        dispatch(uiActions.changeNotification({
            status: 'pending', message: 'sending cart data!', title: 'sending request'
        }));
        try {
            const response = await fetch('https://http-react-cc4f7-default-rtdb.firebaseio.com/reduxCart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
                headers: {
                    'content-type': 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error(`An Unexpected Error Occured : ${response.statusText}`)
            }
            dispatch(uiActions.changeNotification({
                status: 'success', message: 'Sent cart data successfully!', title: 'successfully sent'
            }))
        }
        catch (err) {
            dispatch(uiActions.changeNotification({
                status: 'error', message: err.message, title: 'error occured'
            }))
            console.log(err);
        }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://http-react-cc4f7-default-rtdb.firebaseio.com/reduxCart.json');
            if (!response.ok) {
                throw new Error(`Failed to fetch cart: ${response.statusText}`);
            }
            const data = await response.json();
            dispatch(cartActions.loaded({ items: data.cartItems || [], amount: data.totalAmount, numItems: data.totalNumItems }));
        } catch (err) {
            dispatch(uiActions.changeNotification({
                status: 'error', message: err.message, title: 'error occured'
            }))
        }
    }
}