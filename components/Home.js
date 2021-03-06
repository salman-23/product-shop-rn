import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { singout } from "../store/actions/authActions";
import { Text } from "react-native";

import {
  // ThemeProvider,
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

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
          {user && (
            <ButtonStyled onPress={() => dispatch(singout())}>
              Sign out
            </ButtonStyled>
          )}
          {!user && (
            <ButtonStyled onPress={() => navigation.navigate("Signin")}>
              <Text style={{ color: "white" }}>Sign In</Text>
            </ButtonStyled>
          )}
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
