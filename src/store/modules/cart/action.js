export function addToCart(product) {
  return {
    type: '@home/ADD_TO_CART',
    product,
  };
}

export function addQuantity(id) {
  return {
    type: '@cart/ADD_QUANTITY',
    id,
  };
}

export function removeQuantity(id) {
  return {
    type: '@cart/REMOVE_QUANTITY',
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}
