import React from 'react'
import { useDispatch } from "react-redux";
import { addToCart, subtractFromCart, deleteProduct } from "../../store/actions/shoppingCartActions";

const CartItem = ({product}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation()
    dispatch(addToCart(product))
  }
  const subtract = e => {
    e.stopPropagation()
    dispatch(subtractFromCart(product._id))
  }
  const deleteItem = e => {
    e.stopPropagation()
    dispatch(deleteProduct(product._id))
  }

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center border-bottom my-1">
          <img src={product.image} alt="Rickan"  className="img-fluid img-width mb-1" />
          <div>
            <p> {product.quantity} x {product.price}</p>
            <div>
              <button type="button" className="btn btn-blue btn-sm px-4" onClick={add}>+</button>
              <button type="button" className="btn btn-blue btn-sm px-4" onClick={subtract}>-</button>
              <button type="button" className="btn btn-sm btn-red px-4" onClick={deleteItem}><i className="fas fa-dumpster"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem