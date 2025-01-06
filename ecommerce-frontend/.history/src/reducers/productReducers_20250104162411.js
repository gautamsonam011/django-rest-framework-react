import axios from "axios";
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../constants/productConstants";


export const productsListReducers = (state = {products:[]}, action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products:[]};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products:[]};
        case PRODUCT_LIST_FAIL:
            return {loading: false, products:[]};    
    }
}