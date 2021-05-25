import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../store/actions/shoppingCartActions';

const ProductCard = ({product}) => {

    const dispatch = useDispatch();





    return (
        <div>
            <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src={product.image}
      alt=""
      className="img-fluid img-size"
    />
    <a href="#!">
      <div className="mask"></div>
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">
      {product.desc}
    </p>
    <p>{product.price}</p>
    <Link to={`/productdetails/${product._id}`} className="btn btn-primary">Läs mer</Link>
    <button className="btn btn-primary" onClick={() => {
        dispatch(addToCart(product)) }}>Lägg till i kundvagn</button>
  </div>
</div>
        </div>
    )
}

export default ProductCard
