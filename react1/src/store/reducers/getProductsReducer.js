import actiontypes from '../actiontypes'

let initState = {
    products: null,
    product: null,
    loading: true
}

const getProductsReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().getProducts.setProducts:
            return {
                ...state,
                products: action.payload
            }
        case actiontypes().getProducts.setProduct:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
        
    
            
    }
}

export default getProductsReducer;