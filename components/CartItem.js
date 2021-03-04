import React, { useState } from "react";
import { Image } from "react-native";
import { ListItem, Text, Right, Left, Body, Button, Icon } from "native-base";

import { ItemStyled, TotalPrice, DeleteIcon } from "../styles";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../store/actions/cartActions";

const CartItem = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Body>
        <ItemStyled>
          <Text>{product.name} </Text>
          <Text>{product.price} KD</Text>
          <Text> quantity: {quantity} </Text>
          <Text>total price: {product.price * product.quantity} KD </Text>
        </ItemStyled>
      </Body>
      <Right>
        <DeleteIcon
          name="Feather"
          type="delete"
          onPress={() => dispatch(removeItemFromCart(product.id))}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
