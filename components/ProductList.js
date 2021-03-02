import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { StyleSheet, Text, View } from "react-native";
import { List, Content, Spinner } from "native-base";

const ProductList = ({ products }) => {
  // const loading = useSelector((state) => state.productReducer.loading);
  // if (loading) return <Spinner />;

  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <Content>
      <List>{productList}</List>
    </Content>
  );
};

export default ProductList;
