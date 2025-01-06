import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../constants/productConstants";

// const initialState = {
//     loading: false,
//     productview: [], // Initialize as an empty array
//     error: null
//   };
  
export const productsListReducers = (state = {productview:[]}, action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, productview:[]};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, productview:action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error:action.payload}; 
        default:
            return state
    }
}