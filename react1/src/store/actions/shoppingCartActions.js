
import actiontypes from '../actiontypes'

export const addToCart = product => {
    return {
        type: actiontypes().shoppingCart.add,
        payload: product
    }
}

export const subtractFromCart = id => {
    return {
        type: actiontypes().shoppingCart.subtract,
        payload: id
    }
}


export const deleteProduct = id => {
    return {
        type: actiontypes().shoppingCart.delete,
        payload: id
    }
}