import React from "react";
import "./about.css";

const About = ({ about_ref }) => {
    return (
        <div className="app__about" id="about" ref={about_ref}>
            <div className="app__about-container">
                <h3> ABOUT ME </h3>
            </div>
        </div>
    )
}

export default About;