import React from "react";
import { Image } from "react-native";
import { ListItem, Text, Right, Left, Body, Button } from "native-base";

import {
  ItemStyled,
  TotalPrice,
  DeleteIcon,
  ProductTextStyled,
} from "../styles";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../store/actions/cartActions";

const CartItem = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Body>
        <ItemStyled>
          <ProductTextStyled>{product.name} </ProductTextStyled>
          <ProductTextStyled>{product.price} KD</ProductTextStyled>
          <ProductTextStyled> quantity: {quantity} </ProductTextStyled>
          <ProductTextStyled>
            total price: {product.price * product.quantity} KD{" "}
          </ProductTextStyled>
        </ItemStyled>
      </Body>
      <Right>
        <DeleteIcon
          name="delete"
          type="MaterialIcons"
          onPress={() => dispatch(removeItemFromCart(product.id))}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
