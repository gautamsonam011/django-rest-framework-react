import React from 'react'
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';

function Navbar() {
    return (
        <>
            <Nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <LinkContainer to="/">
                    <a className="navbar-brand" href="#">E-Commerce Cart</a>

                    </LinkContainer>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">New User</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Login</a>
                                    <a className="dropdown-item" href="#">Create Account</a>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="search" placeholder="Search" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit" fdprocessedid="09qod">Search</button>
                        </form>
                    </div>
                </div>
            </Nav>
        </>
    )
}

export default Navbar