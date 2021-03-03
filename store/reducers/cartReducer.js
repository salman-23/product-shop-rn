const initialState = {
  //chek id of products
  items: [
    {
      productId: 1,
      quantity: 10,
    },
    {
      productId: 9,
      quantity: 2,
    },
  ],
  cart: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
