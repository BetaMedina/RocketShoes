import React from 'react';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  BasketContainerBox,
} from './styled';

const Header = ({ navigation, cartSize }) => {
  return (
    <Wrapper>
      <Container>
        <BasketContainer onPress={() => navigation.navigate('Home')}>
          <Logo />
        </BasketContainer>
        <BasketContainerBox onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount> {cartSize}</ItemCount>
        </BasketContainerBox>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});
export default connect(mapStateToProps)(Header);
