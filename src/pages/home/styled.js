import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  align-items: center;
`;

export const Product = styled.View`
  background: #fff;
  padding: 0 25px 15px 10px;
  margin: 15px;
  max-height: 400px;
  border-radius: 4px;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 10px;
`;

export const ProductTittle = styled.Text`
  font-size: 16px;
`;
export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 30px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  margin-left: 6px;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 100%;
`;
export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
export const ProductAmount = styled.View`
  padding: 10px;
  background: #6049ad;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;
export const ProductQuantity = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
