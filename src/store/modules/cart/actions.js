import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCTS,
} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product,
  };
};

export const removeAllProducts = () => {
  return {
    type: REMOVE_ALL_PRODUCTS,
  };
};
