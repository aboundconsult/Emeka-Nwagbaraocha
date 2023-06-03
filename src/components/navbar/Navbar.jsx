import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-container section__container">
                <div className="app__navbar-row d-flex item-center justify-between">
                    <div className="app__navbar-col -logo -left flex-1">
                        <h4> Logo </h4>
                    </div>
                    <div className="app__navbar-col -nav -center d-flex flex-1 gap-4">
                        <ul className="app__navbar-nav d-flex item-center gap-4 justify-center">
                            <li className="app__navbar-nav-item">
                                <a href="#">
                                    <span> Home </span>
                                </a>
                            </li>
                            <li className="app__navbar-nav-item">
                                <a href="#about">
                                    <span> About </span>
                                </a>
                            </li>
                            <li className="app__navbar-nav-item">
                                <a href="#movies">
                                    <span> Movies </span>
                                </a>
                            </li>
                            <li>  
                                <a href="#contact">
                                    <span> Contact </span>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;