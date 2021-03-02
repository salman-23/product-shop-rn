import React from "react";

import {
  ThemeProvider,
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://www.3ctele.com/wp-content/uploads/2015/12/3c-gradient-background.png",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Product Shop</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("ShopList")}>
            Tap here to Shops
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
