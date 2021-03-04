import React, { useState } from "react";
import { Image } from "react-native";
import { ListItem, Text, Right, Left, Body, Button, Icon } from "native-base";
import NumericInput from "react-native-numeric-input";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../store/actions/cartActions";

import { TopStyling, Title, ItemStyled } from "../styles";
const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  //data in reduer how it looks like ?
  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    dispatch(addItemToCart(newItem));
  };

  return (
    <ListItem onPress={() => navigation.navigate("ProductDetail", { product })}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
      />
      <Left>
        <ItemStyled>{product.name}</ItemStyled>
        <ItemStyled>{product.price}</ItemStyled>
      </Left>
      <NumericInput
        rounded
        value={quantity}
        onChange={setQuantity}
        totalHeight={30}
        totalWidth={60}
        initValue={quantity}
        textColor="#29a7d3"
        rightButtonBackgroundColor="#2596be"
        leftButtonBackgroundColor="#7cc0d8"
        iconSize={25}
        iconStyle={{ color: "white" }}
      />
      <Icon type="Fontisto" name="shopping-basket-add" onPress={handleAdd}>
        <Text>Add</Text>
      </Icon>
    </ListItem>
  );
};

export default ProductItem;
