import actiontypes from '../actiontypes'

const initState = {
    shoppingCart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0,
}

const shoppingCartReducer = (state = initState, action) => {
    let itemIndex;

    switch(action.type){
        case actiontypes().shoppingCart.add:
            try {
                itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)
                let cartProduct = {
                    ...action.payload,
                    quantity: 1
                }
                itemIndex < 0
                ? state.shoppingCart = [...state.shoppingCart, cartProduct]
                : state.shoppingCart[itemIndex].quantity += 1

                state.totalCartAmount = getTotalAmount(state.shoppingCart)
                state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
            }
            catch(err) {console.log(err)}
            return state
        
        case actiontypes().shoppingCart.subtract:
            try {
                itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload)

                state.shoppingCart[itemIndex].quantity === 1

                ? state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
                : state.shoppingCart[itemIndex].quantity -= 1 

                state.totalCartAmount = getTotalAmount(state.shoppingCart)
                state.totalCartQuantity = getTotalQuantity(state.shoppingCart)

            }
            catch(err) {console.log(err)}
            return state

            case actiontypes().shoppingCart.delete:

                

                
                state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
            

                state.totalCartAmount = getTotalAmount(state.shoppingCart)
                state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
                return state

            default:
                return state


    }
}

const getTotalQuantity = shoppingCart => {
    let total = 0;

    shoppingCart.forEach(product => {
        total += product.quantity
    });
    return total;
}

const getTotalAmount = shoppingCart => {
    let total = 0;

    shoppingCart.forEach(product => {
        total += product.price * product.quantity
    });
    return total;
}

export default shoppingCartReducer;