import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../constants/productConstants";


const initialState = {
    loading: false,
    productview: [], // Initialize as an empty array
    error: null
  };
  
  function productsListReducer(state = initialState, action) {
    switch (action.type) {
      case 'PRODUCTS_LIST_REQUEST':
        return { ...state, loading: true };
      case 'PRODUCTS_LIST_SUCCESS':
        return { ...state, loading: false, productview: action.payload };
      case 'PRODUCTS_LIST_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  