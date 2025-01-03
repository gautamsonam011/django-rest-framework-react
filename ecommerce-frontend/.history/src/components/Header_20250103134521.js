// Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
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
            <li className="nav-item">
              <NavLink to="/" className="navbar-link" activeClassName="active">
                Home <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                Cart
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/signup"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                New User?
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/login" className="dropdown-item">
                  Login
                </NavLink>
                <NavLink to="/signup" className="dropdown-item">
                  Create Account
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="/logout" className="dropdown-item">
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
