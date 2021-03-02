import { FETCH_SHOP } from "../actions/types";

import instance from "./instance";

export const fetchShop = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");
      // console.log(res.data);
      dispatch({
        type: FETCH_SHOP,
        payload: { shops: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
