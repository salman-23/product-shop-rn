import React from "react";
import { useSelector } from "react-redux";
import { Content, Spinner } from "native-base";
import ProductList from "./ProductList";

import { DetailTitle, DetailImage, DetailWrapper } from "../styles";
const ShopDetail = ({ route, navigation }) => {
  // const loading = useSelector((state) => state.shops.loading);
  //from the route not reducer
  const { shop } = route.params;
  const products = useSelector((state) => state.productReducer.products);

  // if (loading) return <Spinner />;

  const productsFromStore = shop.products.map((product) =>
    products.find((_product) => product.id === _product.id)
  );

  return (
    <Content>
      <DetailWrapper>
        <DetailImage source={{ uri: shop.image }} />
        <DetailTitle>{shop.name}</DetailTitle>
        <ProductList products={productsFromStore} navigation={navigation} />
      </DetailWrapper>
    </Content>
  );
};

export default ShopDetail;
