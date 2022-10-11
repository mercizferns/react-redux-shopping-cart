const initialCartState = {
  total: 0,
  productlist: []
};

const CartReducer = (state = initialCartState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      const updatedCart = state.productlist.concat(payload);
      //updatePrice(updatedCart);
      return {
        ...state,
        productlist: updatedCart
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);

      return {
        ...state,
        productlist: payload.productlist
      };
    case "UPDATE_TOTAL_COST":
      console.log("UPDATE_PRICE", payload);

      return {
        ...state,
        total: payload.total
      };
    default:
      return state;
    //throw new Error(`No case for type ${type} found in CartReducer.`);
  }
};

export default CartReducer;
