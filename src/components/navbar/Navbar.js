import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [ active, setActive ] = useState(false);
    const { pathname } = useLocation();

    useEffect(()=> {
        window.addEventListener("resize", () => {
            if(window.innerWidth > 824){
                setActive(false);
            }
        });
    }, []);

    return (
        <nav className={`app__navbar ${ active ? "-active" : ""}`}>
            <div className="app__navbar-container app__container">
                <div className="app__navbar-row d-flex item-center justify-between gap-2">
                    <div className="app__navbar-col -left">
                        <Link to="/">
                            <div className="-logo">
                                <h4> Emeka <br /> <span> Nwagbaraocha </span> </h4>
                            </div>
                        </Link>
                    </div>
                    <div className="app__navbar-col -right">
                        <ul className="app__navbar-nav_items d-flex gap-2 item-center">
                            <li className="app__navbar-nav_item">
                                <Link to="/" className={pathname === "/" ? '-active' : ""}>
                                    <span> Home </span>
                                </Link>
                            </li>
                            <li className="app__navbar-nav_item">
                                <Link to="/about" className={pathname === "/about" ? '-active' : ""}>
                                    <span> About Me </span>
                                </Link>
                            </li>
                            <li className="app__navbar-nav_item">
                                <Link to="/media" className={pathname === "/media" ? '-active' : ""}>
                                    <span> Media </span>
                                </Link>
                            </li>
                            <li className="app__navbar-nav_item">
                                <Link to="/gallery" className={pathname === "/gallery" ? '-active' : ""}>
                                    <span> Gallery </span>
                                </Link>
                            </li>
                            <li className="app__navbar-nav_item">
                                <Link to="/contact" className={pathname === "/contact" ? '-active' : ""}>
                                    <span> Contact </span>
                                </Link>
                            </li>
                        </ul>

                        <div className="hamburger d-flex flex-column" onClick={() => setActive(!active)}>
                            <span className="strand"></span>
                            <span className="strand"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar