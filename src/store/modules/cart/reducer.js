export default (state = [], action) => {
  switch (action.type) {
    case '@home/ADD_TO_CART': {
      const data = state.findIndex(p => p.id === action.product.id);
      if (data >= 0) {
        state[data].amount += 1;
        return [...state];
      }
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];
    }
    case '@cart/ADD_QUANTITY': {
      const data = state.findIndex(p => p.id === action.id);
      state[data].amount += 1;
      return [...state];
    }
    case '@cart/REMOVE_QUANTITY': {
      const data = state.findIndex(p => p.id === action.id);
      if (state[data].amount > 1) {
        state[data].amount -= 1;
      }
      return [...state];
    }
    case '@cart/REMOVE_FROM_CART': {
      const data = state.filter(p => p.id !== action.id);
      return [...data];
    }
    default:
      return state;
  }
};
