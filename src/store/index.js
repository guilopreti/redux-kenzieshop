import { createStore, combineReducers } from "redux";

import productsReducer from "./modules/products/reducers";

const reducers = combineReducers({ products: productsReducer });

const store = createStore(reducers);

export default store;
