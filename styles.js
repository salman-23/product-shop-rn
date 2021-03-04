import styled from "styled-components/native";
import { Icon } from "native-base";

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
  color: #000;
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
      color: red;
    }
  }
`;

export const ItemStyled = styled.Text`
  color: red;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ProductItemStyled = styled.Text`
  color: red;
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
`;
export const DetailText = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

// export const TotalPrice = styled.Text`
//   color: "#ff0000";
//   font-size: 15px;
//   font-weight: bold;
//   margin-left: 10px;
// `;

export const CartButtonStyled = styled(Icon)`
  color: black;
  margin-right: 10px;
`;
export const DeleteIcon = styled(Icon)`
  color: #ff0000;
  margin-right: 10px;
`;

export const CartTextStyled = styled.Text`
  color: #ff0000;
  font-size: 20px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #ff0000;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
