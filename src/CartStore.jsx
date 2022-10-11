import { createStore } from "redux";

import CartReducer from "./CartReducer";

const CartStore = createStore(CartReducer);
if (CartStore === undefined) {
  throw new Error("CartStore Error");
}

export default CartStore;
