import { combineReducers } from 'redux';
import getProductsReducer from './getProductsReducer';
import shoppingCartReducer from './shoppingCartReducer'

export default combineReducers ({
    getProductsReducer,
    shoppingCartReducer
    
})