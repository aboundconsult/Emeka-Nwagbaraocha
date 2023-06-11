import React from "react";
import "./footer.css";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = ({ contact_ref }) => {
    return (
        <footer className="app__footer" ref={contact_ref}>
            <div className="app__footer-container section__container">
                <div className="app__footer-row">
                    <div className="app__footer-col">
                        <h4> Get In Touch </h4>
                        <h4> Want to build something amazing with me </h4>
                        <a href="mailto:emanuelanyigor@gmail.com" className="-btn">
                            <span> Get in touch </span>
                        </a>
                    </div>
                    <div className="app__footer-col d-flex item-center gap-0 justify-between flex-column -socials">
                        <ul className="-icons d-flex item-center gap-4">
                            <li className="-icon">
                                <a href="">
                                    <BsFacebook />
                                </a>
                            </li>
                            <li className="-icon">
                                <a href="">
                                    <BsInstagram />
                                </a>
                            </li>
                            <li className="-icon">
                                <a href="">
                                    <BsTwitter />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;