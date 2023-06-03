import React from "react";
import "./hero.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsArrowDown} from "react-icons/bs";

import img1 from "../../assets/portfolio3.jpg"
import img2 from "../../assets/portfolio4.jpg"
import img3 from "../../assets/portfolio5.jpg"
import img4 from "../../assets/portfolio6.jpg"

const Hero = ({ scroll_to_about, scroll_to_contact}) => {
    return (
        <div className="app__hero" id="home">
            <div className="app__hero-container">
                <div className="app__hero-row -grid">
                    <div className="app__hero-col -item1">
                        <div className="app__hero-item_container">
                            <div className="-img">
                                <img alt="Emeka Nwagbaraocha" src={img4} />
                            </div>
                            <div className="-overlay" />
                            <div className="-content d-flex item-center gap-2">
                                <button 
                                    className="-btn-dark d-flex item-center justify-between"
                                >
                                    <span> Learn More </span>
                                    <div className="-icon d-flex item-center justify-center">
                                        <BsArrowDown 
                                            onClick={scroll_to_about}
                                        />
                                    </div>
                                </button>
                                <button 
                                    className="-btn-outline  d-flex item-center justify-between"
                                    onClick={scroll_to_contact}
                                >
                                    <span> Contact Us </span>
                                    <div className="-icon d-flex item-center justify-center">
                                        <AiOutlineMail />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app__hero-col -item2">
                        <div className="app__hero-item_container">
                            <div className="-content">
                                <h1> Welcome to Emeka Nwagbaraocha's Portfolio Page </h1>
                            </div>
                        </div>
                    </div>
                    <div className="app__hero-col -item3">
                        <div className="app__hero-item_container">
                            <div className="-overlay" />
                            <div className="-content">
                                <h2> #Emeka Nwagbaraocha on set </h2>
                            </div>
                            <div className="-img">
                                <img alt="Emeka Nwagbaraocha" src={img2} />
                            </div>
                        </div>
                    </div>
                    <div className="app__hero-col -item4">
                        <div className="app__hero-item_container">
                            <div classNAme="-overlay" />
                            <div className="-content">
                                <h2> #Emeka Nwagbaraocha on set </h2>
                            </div>
                            <div className="-img">
                                <img alt="Emeka Nwagbaraocha" src={img1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;