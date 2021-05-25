import React from 'react'
import { useSelector } from "react-redux";
import CartItem from './CartItem'

const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.shoppingCartReducer.shoppingCart)
  const totalCartAmount = useSelector(state => state.shoppingCartReducer.totalCartAmount)

  const emptyCart = (
    <div className="p-2 d-flex justify-content-center align-items-center">
      <p>Din kundvagn är tom</p>
    </div>
  )
  const notEmptyCart = (
    <div className="text-red">
      <div className="total-price p-1">
        Totalt: <span>{totalCartAmount} Kr</span>
      </div>
      <div>
        <button className="btn btn-sm btn-primary m-2">Till kassan</button>
      </div>
    </div>
  )
  return (
    <div>

      {
        shoppingCart && shoppingCart.map(product => (
          <CartItem  key={product._id} product={product} />
        ))
      }
      {
        shoppingCart.length < 1 && emptyCart
      }



    <div className="dropdown-divider"></div>

    {
      shoppingCart.length !== 0 && notEmptyCart
    }



    </div>
  )
}

export default ShoppingCart