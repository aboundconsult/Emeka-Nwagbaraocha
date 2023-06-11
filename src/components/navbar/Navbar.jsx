import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ scroll_to_contact }) => {
    const { pathname } = useLocation();
    const [ active, setActive ] = useState(false);

    useEffect(()=> {
        window.addEventListener("resize", () => {
            if(window.innerWidth > 956){
                setActive(false);
            }
        });
    }, []);

    useEffect(()=> {
        const nav = document.querySelector(".app__navbar");
        window.addEventListener("scroll", (e)=> {
          if(window.scrollY >= 70){
            nav.classList.add("appear");
          } else {
            nav.classList.remove("appear");
          }
        })
      },[])

    return (
        <nav className={`app__navbar ${ active ? "-active" : ""}`}>
            <div className="app__navbar-container section__container">
                <div className="app__navbar-row d-flex item-center justify-between">
                    <div className="app__navbar-col -logo -left flex-1">
                        <Link to="/"> 
                            <span> Emeka </span> <br />
                            <span> Nwagbaraocha </span>
                        </Link>
                    </div>
                    <div className="app__navbar-col -nav -center d-flex flex-1 gap-4">
                        <ul className="app__navbar-nav d-flex item-center gap-4 justify-center">
                            <li className="app__navbar-nav-item">
                                <Link to="/" className={`${pathname === "/" ? "active" : ""}`}>
                                    <span> Home </span>
                                </Link>
                            </li>
                            <li className="app__navbar-nav-item">
                                <Link to="/about" className={`${pathname === "/about" ? "active" : ""}`}>
                                    <span> About </span>
                                </Link>
                            </li>
                            <li className="app__navbar-nav-item">
                                <Link to="/movies" className={`${pathname === "/movies" ? "active" : ""}`}>
                                    <span> Movies </span>
                                </Link>
                            </li>
                            <li className="app__navbar-nav-item">
                                <button onClick={scroll_to_contact} className="-btn">  
                                    <span> Contact </span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="app__nav-menu app__nav-col -right" onClick={()=> setActive(!active)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;