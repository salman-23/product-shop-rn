import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CartButtonStyled } from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <CartButtonStyled
      type="Entypo"
      name="shopping-cart"
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
