import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { List, Content, Spinner } from "native-base";
// import { checkout } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";
import CheckoutButton from "./buttons/CheckoutButton";

const CartList = () => {
  const items = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  // const dispatch = useDispatch();

  // const loading = useSelector((state) => state.productReducer.loading);
  // Loading before you map
  // if (loading) return <Spinner />;

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
  if (cartList.length === 0) {
    return <Text>You cart is empty add items to checkout</Text>;
  }
  return (
    <Content>
      <List>
        {cartList}
        <CheckoutButton />
      </List>
    </Content>
  );
};

export default CartList;
