import React from 'react'
import {NavLink} from 'react-router-dom'
import ShoppingCart from './shoppingcart/ShoppingCart'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const itemCount = useSelector(state => state.shoppingCartReducer.totalCartQuantity)




    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="container-fluid">

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
          height="15"
          alt=""
          loading="lazy"
        />
      </NavLink>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        
      </ul>

    </div>



    <div className="d-flex align-items-center">



      <NavLink
        className="text-reset me-3 dropdown-toggle hidden-arrow"
        to="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-shopping-cart"></i>
        <span className="badge rounded-pill badge-notification bg-danger">{itemCount}</span>
      </NavLink>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <ShoppingCart />
      </ul>


      
        
    </div>

  </div>

</nav>

        </div>
    )
}

export default Navbar
