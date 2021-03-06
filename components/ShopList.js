import React from "react";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
// import { StyleSheet, Text, View } from "react-native";
import { List, Content, Spinner } from "native-base";

const ShopList = ({ navigation }) => {
  // const loading = useSelector((state) => state.shopReducer.loading);

  const shops = useSelector((state) => state.shopReducer.shops);

  // if (loading) return <Spinner />;
  const shopList = shops.map((shop) => (
    <ShopItem key={shop.id} shop={shop} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};

export default ShopList;
