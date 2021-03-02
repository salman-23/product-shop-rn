import { FETCH_SHOP } from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOP:
      return {
        ...state,
        shops: action.payload.shops,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
