import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/types";

const initialState = {
  //check id of products
  items: [],
  cart: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const foundItem = state.items.find(
        (item) => item.productId === newItem.productId
      );
      if (foundItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundItem
              ? {
                  ...foundItem,
                  quantity: foundItem.quantity + newItem.quantity,
                }
              : item
          ),
        };
      } else return { ...state, items: [...state.items, newItem] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case CHECKOUT:
      alert("We have got your order! ");
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default reducer;
