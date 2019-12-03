import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 20px;
  height: 100%;
  background: #191920;
  align-items: flex-start;
`;

export const Card = styled.View`
  background: #fff;
  flex: 1;
  border-radius: 10px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductInfo = styled.View`
  margin: 10px;
  flex-direction: row;
  align-items: center;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;
export const ProductTitle = styled.Text``;
export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;
export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;
export const BarPrice = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;
export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  color: #191920;
`;
export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;
export const TotalContainer = styled.View`
  margin-top: 30px;
`;
export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const MessageBuy = styled.Text`
  justify-content: center;
  align-items: center;
`;
