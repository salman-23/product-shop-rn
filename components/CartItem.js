import React from "react";
import { Image } from "react-native";
import { ListItem, Text } from "native-base";

import { ItemStyled, TotalPrice } from "../styles";
const CartItem = ({ product, quantity }) => {
  return (
    <ListItem>
      {/* <Body> */}
      <ItemStyled>{product.name}</ItemStyled>
      <ItemStyled>{product.price}</ItemStyled>
      <ItemStyled>{quantity}</ItemStyled>
      {/* <TotalPrice note>
        {product.price} KD x {product.quantity}
      </TotalPrice> */}
      <Text>{product.price * product.quantity} KD x</Text>
      {/* </Body> */}
    </ListItem>
    // <View>
    //   <Text></Text>
    // </View>
  );
};

export default CartItem;
