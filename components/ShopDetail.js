import React from "react";
import { useSelector } from "react-redux";
import { Content, Spinner } from "native-base";
import ProductList from "./ProductList";

import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "../styles";
const ShopDetail = ({ navigation, route }) => {
  // const loading = useSelector((state) => state.shops.loading);
  //from the route not reducer
  const { shop } = route.params;
  // const shop = useSelector((state) => state.shopReducer.shops[0]);
  const products = useSelector((state) => state.productReducer.products);

  // if (loading) return <Spinner />;

  const productsFromStore = shop.products.map((product) =>
    products.find((_product) => product.id === _product.id)
  );

  return (
    <Content>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shop.image }} />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <ProductList products={productsFromStore} />
    </Content>
  );
};

export default ShopDetail;
