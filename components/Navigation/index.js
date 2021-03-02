import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <>
      {/* name of screen */}
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
      >
        {/* as props navagtion + params */}
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* <Screen name="Home" component={Home} /> */}

        <Screen
          name="ShopList"
          component={ShopList}
          options={{ title: "Choose a Shop" }}
        />
        <Screen
          name="ShopDetail"
          component={ShopDetail}
          options={({ route }) => {
            const { shop } = route.params;
            return {
              title: shop.name,
            };
          }}
        />
      </Navigator>
    </>
  );
};

export default RootNavigator;
