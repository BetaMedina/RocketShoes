/* eslint-disable global-require */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Product,
  ProductImage,
  ProductTittle,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductQuantity,
} from './styled';
import api from '../../services/axios';
import { formatPrice } from '../../util/numberFormat';
import * as actions from '../../store/modules/cart/action';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount = () => {
    api.get('/products').then(res => {
      this.setState({ products: res.data });
    });
  };

  handleAddToCart = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  Product = ({ item }) => {
    const product = this.props.cart.filter(res => res.id === item.id);
    const amount = product[0] ? product[0].amount : 0;
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTittle>{item.title}</ProductTittle>
        <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        <AddButton onPress={() => this.handleAddToCart(item)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductQuantity>{amount}</ProductQuantity>
          </ProductAmount>
          <AddButtonText>Add to cart</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          extraData={this.props.cart}
          vertical
          renderItem={this.Product}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
