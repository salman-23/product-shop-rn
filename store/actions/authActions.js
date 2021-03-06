import instance from "./instance";
import decode from "jwt-decode";
import { SET_USER } from "../actions/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  AsyncStorage.setItem("myToken", token);
  //the req with instance will be will a token
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      AsyncStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));

      navigation.replace("CartList");
      console.log("Your user has been created successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (user, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      AsyncStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));
      navigation.goBack();
      console.log("Your user has been sign in successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const singout = () => {
  AsyncStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;

  return {
    type: SET_USER,
    payload: null,
  };
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (user.exp >= currentTime) {
      dispatch(setUser(token));
    } else {
      AsyncStorage.removeItem("myToken");
      dispatch(singout());
    }
  }
};
