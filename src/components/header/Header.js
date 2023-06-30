import React from "react";
import "./header.css";

const Header = ({ title, subtitle }) => {
    return (
        <div className="app__header">
            <div className="-header-overlay" />
            <div className="-header-heading">
                <div className="section__container">
                    <h3> { title } </h3>
                    <h2> { subtitle } </h2>
                </div>
            </div>
        </div>
    )
}

export default Header;