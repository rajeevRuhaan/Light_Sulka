import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../assets/logo_sulka.svg";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/programs" className="cart__link">
            Programs
          </Link>
        </li>
        <li>
          <Link to="/calculator" className="cart__link">
            BMR Calculator
          </Link>
        </li>
        <li>
          <Link to="/signin" className="cart__link">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge">{getCartCount()}</span>
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
