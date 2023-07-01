import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';

export default function Navbar(){
    const { pathname } = useLocation();
    const [ open , set_open ] = useState(false);

    useEffect(()=> {
        window.addEventListener("resize", () => {
            if(window.innerWidth > 823){
                set_open(false);
            }
        });
    }, []);

    return (
        <nav className={`app__navbar ${open ? "-open" : ""}`}>
            <div className={`app__navbar-bg`}></div>
            <div className="app__navbar-fill"></div>
            <div className="app__navbar-toggle">
                <button className="app__navbar-toggle_menu" onClick={()=> set_open(!open)}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="app__navbar-content app__container">
                <div className="app__navbar-container">
                    <div className="app__navbar-container_row">
                        <div className="app__navbar-container_col -left">
                            <div className="app__navbar-logo -static">
                                <Link to="/">
                                    <div className="-logo">
                                        <h4> Emeka <br /> <span> Nwagbaraocha </span> </h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="app__navbar-container_col -right">
                            <div className="app__navbar-nav">
                                <Link to="/" className={`app__navbar-navItem ${pathname === "/" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                    <span> Home </span>
                                </Link>
                                <Link to="/about" className={`app__navbar-navItem ${pathname === "/about" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                    <span> About Me </span>
                                </Link>
                                <Link to="/gallery" className={`app__navbar-navItem ${pathname === "/gallery" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                    <span> Gallery </span>
                                </Link>
                                <Link to="/media" className={`app__navbar-navItem ${pathname === "/media" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                    <span> Media </span>
                                </Link>
                                <Link to="/contact" className={`app__navbar-navItem ${pathname === "/contact" ? "-active" : "" }`} onClick={()=> set_open(false)}>
                                    <span> Contact </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}