import React from 'react';
import logo from '../../src/assets/logo.jpeg';
import {Link} from "react-scroll";

function Header(props) {
    return (
        <div className={"navigation-container"}>
            <nav className="contai navbar navbar-expand-lg shadow p-3 mb-5 rounded navigation-container">
                <div className="container ">
                    <img src={logo} alt="logo" className="nav-logo m-auto ps-5" width={"10%"}/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarScroll">
                        <div className="d-flex m-auto">
                            <ul className="navbar-nav me-auto gap-10 m-auto my-2 my-lg-0 navbar-nav-scroll d-flex gap-5">
                                <li className="nav-item m-auto">
                                    <Link activeClass={"nav-link-active"} spy
                                          className="nav-link cursor-pointer home nav-link-text navigation-items"
                                          aria-current="page"
                                          to="home">Home</Link>
                                </li>
                                <li className="nav-item m-auto">
                                    <Link className="nav-link explore nav-link-text navigation-items cursor-pointer"
                                          to={"clients"}>
                                        About us</Link>
                                </li>
                                <li className="nav-item m-auto">
                                    <Link className="nav-link contact nav-link-text navigation-items cursor-pointer"
                                          to={"services"}>Services</Link>
                                </li>
                                <li className="nav-item m-auto">
                                    <Link className="nav-link contact nav-link-text navigation-items cursor-pointer"
                                          to={"blog"}>Blog</Link>
                                </li>
                                <li className="nav-item m-auto">
                                    <Link className="nav-link contact nav-link-text navigation-items cursor-pointer"
                                          to={"/portfolio"}>Porfolio</Link>
                                </li>
                                <li className="nav-item m-auto">
                                    <Link className="nav-link contact nav-link-text navigation-items cursor-pointer"
                                          to={"contact-us"}>Contact Us</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link
                                        className="nav-link contact nav-link-text navigation-items d-flex flex-column justify-content-center cursor-pointer"
                                        to={"/contact"}
                                        to={"/quotes"}>
                                        <button className="btn btn-see-more fw-bolder">Get Quotes</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={"d-none d-lg-flex"}>
                        <div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;