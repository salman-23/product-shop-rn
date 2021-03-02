import { FETCH_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
