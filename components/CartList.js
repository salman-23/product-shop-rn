import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { List, Content, Spinner } from "native-base";
const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  // const loading = useSelector((state) => state.productReducer.loading);
  // Loading before you map
  // if (loading ) return <Spinner/>

  const cartList = items
    .map((item) => ({
      ...products.find((product) => product.id === item.productId),
      quantity: item.quantity,
    }))
    .map((product) => (
      <CartItem
        product={product}
        key={product.id}
        quantity={product.quantity}
      />
    ));

  return (
    <Content>
      <List>{cartList}</List>
    </Content>
  );
};

export default CartList;
