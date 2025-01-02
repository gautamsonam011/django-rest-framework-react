import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <LinkContainer to="/">
                        <Nav.Link className="navbar-brand">E-Commerce Cart</Nav.Link>
                    </LinkContainer>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <LinkContainer to="/">
                                    <Nav.Link className="nav-link active">Home</Nav.Link>
                                    <span className="visually-hidden">(current)</span>
                                </LinkContainer>
                            </li>
                            <li className="nav-item">
                                <LinkContainer to="/">
                                    <Nav.Link className="nav-link" >
                                        Cart
                                    </Nav.Link>
                                </LinkContainer>
                            </li>
                            <li className="nav-item dropdown">
                                <LinkContainer to="/signup">
                                <Nav.Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">New User</Nav.Link>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Login</a>
                                    <a className="dropdown-item" href="#">Create Account</a>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                                </LinkContainer>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit" fdprocessedid="09qod">Search</button>
                        </form>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Header
