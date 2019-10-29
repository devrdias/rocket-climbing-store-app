import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  padding: 5px;
`;

export const Card = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #ffffff;
  border-width: 0.02;
  border-radius: 4px;
  margin: 5px 5px;
  box-shadow: 0.5px 0.75px 1px #333;
`;

export const CardItem = styled.View`
  flex: 1;
`;

export const ProductImage = styled.Image`
  width: 160px;
  height: 160px;
  border: 0;
`;

export const ProductDetail = styled.View`
  flex: 1;
  padding-bottom: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: Roboto;
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
  color: #333333;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

export const StyledButton = styled.TouchableOpacity`
  background: #333;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #fff;
`;
