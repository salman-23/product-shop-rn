import React from "react";
import { Image } from "react-native";
import { ListItem } from "native-base";

import { ProductWrapper, TopStyling, Title, ItemStyled } from "../styles";
const ProductItem = ({ navigation, product }) => {
  return (
    <ListItem onPress={() => navigation.navigate("ProductDetail", { product })}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
      />
      <ItemStyled>{product.name}</ItemStyled>
      <ItemStyled>{product.price}</ItemStyled>
    </ListItem>
  );
};

export default ProductItem;
