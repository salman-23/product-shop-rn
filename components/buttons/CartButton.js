import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CartButtonStyled, CartTextStyled } from "../../styles";
import { useSelector } from "react-redux";
import { Button } from "native-base";

const CartButton = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.cartReducer.items);
  let totalQuantity = 0;
  items.forEach((item) => (totalQuantity += item.quantity));

  return (
    <Button transparent light onPress={() => navigation.navigate("CartList")}>
      <CartTextStyled>{totalQuantity}</CartTextStyled>
      <CartButtonStyled
        type="Entypo"
        name="shopping-cart"
        onPress={() => navigation.navigate("CartList")}
      />
    </Button>
  );
};

export default CartButton;
