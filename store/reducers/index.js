import { combineReducers } from "redux";

import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  // productReducer: productReducer,
  // shopReducer: shopReducer,
  productReducer,
  shopReducer,
  cartReducer,
  authReducer,
});
// The previous state received by the reducer has unexpected type of "Function". Expected argument to be an object with the following keys: "productReducer", "shopReducer"

export default rootReducer;
