import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, FlatList } from 'react-native';
import * as actions from '../../store/modules/cart/action';
import { formatPrice } from '../../util/numberFormat';
import {
  Card,
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductInfo,
  ProductDetails,
  ProductDelete,
  BarPrice,
  ProductAmount,
  ProductSubtotal,
  ProductControlButton,
  TotalText,
  TotalAmount,
  TotalContainer,
  MenssageBuy,
} from './styled';
// import { Container } from './styles';

const Cart = ({
  Product,
  FinalQuantity,
  addQuantity,
  removeQuantity,
  removeFromCart,
}) => {
  const cardProduct = ({ item }) => {
    return (
      <View key={item.id}>
        <ProductInfo>
          <ProductImage
            source={{
              uri: item.image,
            }}
          />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
          </ProductDetails>
          <ProductDelete onPress={() => removeFromCart(item.id)}>
            <Icon name="delete-forever" size={24} color="#7157c1" />
          </ProductDelete>
        </ProductInfo>

        <BarPrice>
          <ProductControlButton onPress={() => removeQuantity(item.id)}>
            <Icon name="remove-circle-outline" size={20} color="#7159c1" />
          </ProductControlButton>
          <ProductAmount readonly value={item.amount.toString()} />
          <ProductControlButton onPress={() => addQuantity(item.id)}>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </ProductControlButton>
          <ProductSubtotal>{formatPrice(item.subtotal)}</ProductSubtotal>
        </BarPrice>
      </View>
    );
  };
  console.tron.log(Product.length);
  return (
    <Container>
      <Card>
        <FlatList
          data={Product}
          vertical
          renderItem={cardProduct}
          keyExtractor={product => String(product.id)}
        />
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalAmount>{FinalQuantity}</TotalAmount>
        </TotalContainer>
      </Card>
    </Container>
  );
};

const mapStateToProps = state => ({
  Product: state.cart.map(res => ({
    ...res,
    subtotal: formatPrice(res.price * res.amount),
  })),
  FinalQuantity: formatPrice(
    state.cart.reduce((total, res) => {
      return total + res.price * res.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
