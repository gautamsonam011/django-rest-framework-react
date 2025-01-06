import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";


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

export const productDetailReducers = (state = {product:[]}, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, productview:[]};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, productview:action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error:action.payload}; 
        default:
            return state
    }
}


  