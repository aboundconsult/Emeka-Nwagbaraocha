import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer  = () => {
    return (
        <footer className="app__footer">
            <div className="app__footer-container">
                <div className="app__footer-row app__container">
                    <div className="app__footer-header">
                        <h4> Actor </h4>
                    </div>
                    <div className="app__footer-body d-flex justify-between gap-2">
                        <div className="">
                            <h3> Emeka <br /> <span> Nwagbaraocha </span> </h3>
                            <h4> Model <span> and </span> Scriptwriter. </h4>
                        </div>

                        <Link to="/projects">
                            <span> View My projects </span>
                        </Link>
                    </div>
                </div>
                <div className="app__footer-row">
                    <div className="app__container d-flex justify-between item-center gap-2">
                        <div className="app__footer-col -left">
                        <p> { new Date().getFullYear() } All Rights Reserved. </p>
                        </div>
                        <div className="app__footer-col -right -socials">
                            <ul className="app__footer-links d-flex item-center gap-2">
                                <li className="app__footer-link">
                                    <a href="" target="_blank" rel="noreferrer">
                                        <span>
                                            <BsInstagram />
                                        </span>
                                    </a>
                                </li>
                                <li className="app__footer-link">
                                    <a href="" target="_blank" rel="noreferrer">
                                        <span>
                                            <BsTwitter />
                                        </span>
                                    </a>
                                </li>
                                <li className="app__footer-link">
                                    <a href="" target="_blank" rel="noreferrer">
                                        <span>
                                            <BsFacebook />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;