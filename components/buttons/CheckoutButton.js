import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { checkout } from "../../store/actions/cartActions";
import { CheckoutButtonStyled, CheckoutButtonText } from "../../styles";

const CheckoutButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.authReducer.user);

  const handlePress = () => {
    if (user) {
      dispatch(checkout());
    } else {
      Alert.alert(
        "OPPS!",
        "Sign in to place an order!",
        [
          {
            text: "Ok!",
            onPress: () => console.log("Ok pressed"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Sign in",
            onPress: () => navigation.navigate("Signin"),
          },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <CheckoutButtonStyled onPress={handlePress}>
      <CheckoutButtonText>Checkout</CheckoutButtonText>
    </CheckoutButtonStyled>
  );
};

export default CheckoutButton;
