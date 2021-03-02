import React from "react";
import { Image } from "react-native";
import { ListItem } from "native-base";

import { ShopItemStyled } from "../styles";
const ShopItem = ({ shop, navigation }) => {
  return (
    // pass shop as navatios
    <ListItem onPress={() => navigation.navigate("ShopDetail", { shop })}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: shop.image }} />
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
  );
};

export default ShopItem;
