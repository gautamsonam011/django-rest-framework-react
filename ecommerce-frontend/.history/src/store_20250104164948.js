import { thunk } from 'redux-thunk';  // Make sure 'thunk' is imported correctly
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsListReducers } from './reducers/productReducers';

// Combining reducers
const reducer = combineReducers({
    productList: productsListReducers,
});

const initialState = {};

// Middleware array
const middleware = [thunk];

// Creating the Redux store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) // Use spread operator to pass the array as individual arguments
);

export default store;
