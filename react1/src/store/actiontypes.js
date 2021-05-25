const actiontypes = () => {
    return {
        getProducts: {
            getProducts: 'GET_PRODUCTS',
            setProducts: 'SET_PRODUCTS',
            setProduct: 'SET_PRODUCT',
        },
        shoppingCart: {
            add: 'ADD_TO_CART',
            subtract: 'SUBTRACT_FROM_CART',
            delete: 'DELETE_PRODUCT'
        }
    }
}

export default actiontypes;