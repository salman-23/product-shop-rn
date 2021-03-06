import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import { fetchProduct } from "./actions/productActions";
import { fetchShop } from "./actions/shopActions";
import { checkForToken } from "./actions/authActions";

import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(reducer(applyMiddleware(thunk)));

store.dispatch(fetchProduct());
store.dispatch(fetchShop());
store.dispatch(checkForToken());

export default store;
