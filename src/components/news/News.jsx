import React from "react";
import { Link } from "react-router-dom";
import "./news.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsArrowDown} from "react-icons/bs";

import img1 from "../../assets/portfolio3.jpg"
import img2 from "../../assets/portfolio4.jpg"
import img4 from "../../assets/portfolio6.jpg"

const News = ({scroll_to_contact}) => {
    return (
        <div className="app__news section__container" id="home">
            <div className="app__news-container">
                <div className="app__news-row -grid">
                    <div className="app__news-col -item1">
                        <div className="app__news-item_container">
                            <div className="-img">
                                <img alt="Emeka Nwagbaraocha" src={img4} />
                            </div>
                            <div className="-overlay" />
                            <div className="-content d-flex item-center gap-2">
                                <Link to="/about"
                                    className="-btn-dark d-flex item-center justify-between"
                                >
                                    <span> Learn More </span>
                                    <div className="-icon d-flex item-center justify-center">
                                        <BsArrowDown />
                                    </div>
                                </Link>
                                <button 
                                    className="-btn-outline  d-flex item-center justify-between"
                                    onClick={scroll_to_contact}
                                >
                                    <span> Contact Me </span>
                                    <div className="-icon d-flex item-center justify-center">
                                        <AiOutlineMail />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app__news-col -item2">
                        <div className="app__news-item_container">
                            <div className="-content">
                                <h1> Welcome to Emeka Nwagbaraocha's Portfolio Page </h1>
                            </div>
                        </div>
                    </div>
                    <div className="app__news-col -item3">
                        <div className="app__news-item_container">
                            <div className="-overlay" />
                            <div className="-content">
                                <h2> #Emeka Nwagbaraocha on set </h2>
                            </div>
                            <div className="-img">
                                <img alt="Emeka Nwagbaraocha" src={img2} />
                            </div>
                        </div>
                    </div>
                    <div className="app__news-col -item4">
                        <div className="app__news-item_container">
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

export default News;