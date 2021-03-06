import styled from "styled-components/native";
import { Icon } from "native-base";
import { TextInput, TouchableOpacity } from "react-native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const ProductWrapper = styled.View`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: #2596be;
    }
  }
`;

export const ItemStyled = styled.Text`
  color: #2596be;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ProductItemStyled = styled.Text`
  color: #2596be;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const DetailWrapper = styled.View`
  margin-top: 50px;
`;

export const DetailImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const DetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: #2596be;
`;
export const DetailText = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

// export const TotalPrice = styled.Text`
//   color: #ff0000;
//   font-size: 15px;
//   font-weight: bold;
//   margin-left: 10px;
// `;

export const CartButtonStyled = styled(Icon)`
  color: #2596be;

  margin-right: 10px;
`;
export const AddIcon = styled(Icon)`
  color: #2596be;
  margin-right: 10px;
`;
export const DeleteIcon = styled(Icon)`
  color: #2596be;
  margin-right: 10px;
`;

export const CartTextStyled = styled.Text`
  color: #2596be;
  font-size: 20px;
`;

export const ProductTextStyled = styled.Text`
  color: #2596be;
  font-size: 20px;
  font-weight: bold;
`;

export const CheckoutButtonStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #2596be;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #2596be;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #2699fa;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #fff;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #fcfdff;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #2596be;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: #fcfdff;
  margin-top: 15px;
`;
