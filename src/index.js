import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./store/redux";
import "./index.css";
import App from "./App";
import configureCartStore from "./custom-hooks/cart-store";
import configureUiStore from "./custom-hooks/ui-store";

configureCartStore();
configureUiStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
