import React from "react";
import "./header.css";

const Header = ({ title, subtitle, Icon }) => {
    return (
        <div className="app__header">
            <div className="app__header-container section__container">
                <h2 className="-header_title"> { title } </h2>
                <h3 className="-header_subtitle"> 
                    <span> { subtitle } </span>
                    { Icon && <Icon /> }
                </h3>
            </div>
        </div>
    )
}

export default Header;