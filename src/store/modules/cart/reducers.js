import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCTS,
} from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@KZShop:cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];

    case REMOVE_PRODUCT:
      const actualProducts = state.filter(({ name }) => {
        return name !== action.product.name;
      });
      return actualProducts;

    case REMOVE_ALL_PRODUCTS:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
