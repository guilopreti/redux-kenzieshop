import { addProduct, removeProduct, removeAllProducts } from "./actions";

export const addProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  dispatch(addProduct(product));
  cart.push(product);

  localStorage.setItem("@KZShop:cart", JSON.stringify(cart));
};

export const removeProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();

  const actualProducts = cart.filter((actualProduct) => {
    return actualProduct !== product;
  });
  localStorage.setItem("@KZShop:cart", JSON.stringify(actualProducts));
  dispatch(removeProduct(product));
};

export const removeAllProductsThunk = () => (dispatch) => {
  dispatch(removeAllProducts());
  localStorage.clear();
};
