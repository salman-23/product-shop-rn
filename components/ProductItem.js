import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ListItem } from "native-base";

import {
  ProductWrapper,
  TopStyling,
  Title,
  ProductItemStyled,
} from "../styles";
const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
      />
      <ProductItemStyled>{product.name}</ProductItemStyled>
    </ListItem>
  );
};

export default ProductItem;
