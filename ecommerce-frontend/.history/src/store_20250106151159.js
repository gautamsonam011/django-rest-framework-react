import { thunk } from 'redux-thunk'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsListReducers, productDetailReducers } from './reducers/productReducers';

const reducer = combineReducers({
    productList: productsListReducers,
    productDetail: productDetailReducers
});

const initialState = {};

// Middleware array
const middleware = [thunk];

// Creating the Redux store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
