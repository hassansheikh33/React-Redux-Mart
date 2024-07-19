import { useCallback } from "react";

export default function useFetch() {

    const sendRequest = useCallback(async (bodyObj) => {
        console.log('fetching');
        try {
            const response = await fetch('https://http-react-cc4f7-default-rtdb.firebaseio.com/Orders.json', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bodyObj)
            })
            if (!response.ok) {
                throw new Error(`An Unexpected Error Occured : ${response.statusText}`)
            }
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch (err) {
            console.log(err);
        }
    });
    return {
        sendRequest
    }
}