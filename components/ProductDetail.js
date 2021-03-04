import React from "react";
import { useSelector } from "react-redux";
import { Content, Spinner } from "native-base";
import ProductList from "./ProductList";

import { DetailTitle, DetailImage, DetailWrapper, DetailText } from "../styles";
const ProductDetail = ({ route }) => {
  const { product } = route.params;
  // const loading = useSelector((state) => state.products.loading);
  // if (loading) return <Spinner />;

  return (
    <Content>
      <DetailWrapper>
        <DetailImage source={{ uri: product.image }} />
        <DetailTitle>{product.name}</DetailTitle>
        <DetailText>{product.price} KD</DetailText>
        <DetailText>{product.description}</DetailText>
      </DetailWrapper>
    </Content>
  );
};

export default ProductDetail;
