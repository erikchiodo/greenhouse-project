import { useReducer } from "react";

export const reducer = (state, action) => {
    switch (action.type) {
      // if action type is UPDATE_PRODUCTS, return a new state object with an updated products array
      case 'UPDATE_PRODUCTS':
        return {
          ...state,
          products: [...action.products],
        };
  
      // if action type is UPDATE_CATEGORIES, return a new state object with an updated categories array
      case 'UPDATE_CATEGORIES':
        return {
          ...state,
          categories: [...action.categories],
        };
  
      // if action type is UPDATE_CURRENT_CATEGORY, return a new state object with the new value for currentCategory
      case 'UPDATE_CURRENT_CATEGORY':
        return {
          ...state,
          currentCategory: action.currentCategory,
        };
  
      // if action type is ADD_TO_CART, return a new state object with the new cart item added into the cart array
      case 'ADD_TO_CART':
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
  
      // if action type is ADD_MULTIPLE_TO_CART, return a new state object with the multiple items added into the cart array
      case 'ADD_MULTIPLE_TO_CART':
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };
  
      // if action type is REMOVE_FROM_CART, return a new state object with the specified item removed from the cart array
      case 'REMOVE_FROM_CART':
        let newState = state.cart.filter(product => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
  
      // if action type is UPDATE_CART_QUANTITY, return a new state object with the specified item's quantity updated in the cart array
      case 'UPDATE_CART_QUANTITY':
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map(product => {
            if (action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity;
            }
            return product;
          }),
        };
  
      // if action type is CLEAR_CART, return a new state object with an empty cart array
      case 'CLEAR_CART':
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };
  
      // if action type is TOGGLE_CART, return a new state object with the cartOpen value toggled
      case 'TOGGLE_CART':
        return {
          ...state,
          cartOpen: !state.cartOpen,
        };
  
      // if action type is SET_USER, return a new state object with the user set to the action user
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };
  
      // default action if none of the specified actions are dispatched
      default:
        return state;
    }
  };
  
  export default reducer;
  