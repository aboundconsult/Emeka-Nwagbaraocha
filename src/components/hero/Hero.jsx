import React from "react";
import "./hero.css";

const Hero = () => {
    return (
        <div className="app__hero d-flex item-center justify-center">
            <div className="-overlay" />
            <div className="app__hero-container">
                <div className="app__hero-content section__container">
                    <h1> 
                        Welcome To <br /> 
                        <span> Emeka Nwagbaraocha's </span> <br />
                        Portfolio Page.
                    </h1>
                    <p> <span> Actor </span>, <span> Novelist </span>, <span> Comedian.</span></p>
                </div>
            </div>
        </div>
    )
}


export default Hero;