import { FETCH_PRODUCT } from "../actions/types";

import instance from "./instance";

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const respone = await instance.get("/products");
      dispatch({
        type: FETCH_PRODUCT,
        payload: { products: respone.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
