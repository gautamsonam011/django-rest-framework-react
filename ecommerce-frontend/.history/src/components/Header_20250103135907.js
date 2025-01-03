// Header.js
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-info" data-bs-theme="info">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand navbar-link text-white">
          E-Commerce Cart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ms-2">
              <NavLink to="/" className="navbar-link text-white" activeClassName="active">
                Home <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="navbar-link text-white" activeClassName="active">
              Cart <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/signup"
                className="navbar-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                activeClassName="active"
              >
                New User <i className="fa-solid fa-user-plus"></i>
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/login" className="dropdown-item" activeClassName="active">
                  Login
                </NavLink>
                <NavLink to="/signup" className="dropdown-item" activeClassName="active">
                  Create Account
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="/logout" className="dropdown-item" activeClassName="active">
                  Logout
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
