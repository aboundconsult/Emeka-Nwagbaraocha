import "../css/home.css";
import { Link } from "react-router-dom";

import { BsFacebook, BsInstagram, BsTwitter, BsArrowUpRight } from "react-icons/bs";
import img1 from "../assets/portfolio5.jpg";

const Homepage = () => {
    return (
        <div className="app__home">
            <div className="app__home-hero">
                <div className="app__home-hero_container">
                    <div className="app__home-hero_header section__container">
                        <h2> Hi there! Welcome to <span> Emeka Nwagbaraocha </span> Portfolio website </h2>
                    </div>
                    <div className="app__home-hero_body">
                        <div className="-body_img-grid">
                            <div className={`-hero_img -grid-img-1`}></div>
                            <div className={`-hero_img -grid-img-2 d-flex flex-column gap-2`}>
                                <div className={`-hero_img -grid-img-2a`}></div>
                                <div className={`-hero_img -grid-img-2b`}></div>
                            </div>
                            <div className={`-hero_img -grid-img-3`}></div>
                            <div className={`-hero_img -grid-img-4 d-flex flex-column gap-2`}>
                                <div className={`-hero_img -grid-img-4a`}></div>
                                <div className={`-hero_img -grid-img-4b`}></div>
                            </div>
                            <div className={`-hero_img -grid-img-5`}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app__home-about">
                <div className="app__home-about_container section__container">
                    <div className="app__home-about_body">
                        <div className="app__home-row d-flex justify-center gap-4
                        ">
                            <div className="app__home-col -left -img-section">
                                <div className="-img-box">
                                    <div className="-img-overlay" />
                                    <div className="-img"></div>
                                </div>
                            </div>
                            <div className="app__home-col -right -text-section">
                                <div className="-text-header">
                                    <h4> About Me </h4>
                                </div>
                                <div className="-text-body">
                                    <div className="-text-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                    </div>
                                    <div className="-text-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                    </div>
                                    <div className="-text-field">
                                        <Link to="/about" className="d-flex gap-1 item-center">
                                            <span> Learn More </span>
                                            <BsArrowUpRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="app__home-portfolio">
                <div className="app__home-portfolio_container section__container">
                    <h3 className="-title"> Porfolio </h3>
                    <div className="app__home-portfolio_body d-flex gap-2 justify-between">
                        <div className="app__home-portfolio_col -left">
                            <h2> My Resume </h2>
                            <div className="-border_line" />
                        </div>
                        <div className="app__home-portfolio_col -right d-flex justify-between item-center">
                            <div className="d-flex flex-column item-center gap-1">
                                <h3 className="-val"> 32 </h3>
                                <h4 className="-heading"> Features </h4>
                            </div>
                            <div className="d-flex flex-column item-center gap-1">
                                <h3 className="-val"> 24 </h3>
                                <h4 className="-heading"> Movies </h4>
                            </div>
                            <div className="d-flex flex-column item-center gap-1">
                                <h3 className="-val"> 14 </h3>
                                <h4 className="-heading"> TV Series </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app__home-projects">
                <div className="app__home-container app__container">
                    <div className="app__home-row d-flex gap-2">
                        <div className="app__home-projects_header">
                            <h2> Featured Projects </h2>
                        </div>
                        <div className="app__home-projects_body">
                            {[1,2,3,4].map(project => (
                                <div className="d-flex app__home-project" key={project}>
                                    <div className="app__home-project_col -left d-flex flex-column gap-0">
                                        <h3 className="-title"> Far From Home </h3>
                                        <h4 className="-subtitle"> 2020 </h4>
                                    </div>
                                    <div className="app__home-project_col -right">
                                        <p> A sequel of Baishe Srabon where I am acting as Khoka, a serial killer who continued heinous killings in the same manner 26 years back. </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="app__home-gallery">
                <div className="app__home-container section__container">
                    <div className="app__home-header d-flex justify-between item-center">
                        <div className="">
                            <h2> Gallery </h2>
                            <div className="-border_line" />
                        </div>
                        <Link to="/gallery">
                            <span> View More Pictures </span>
                        </Link>
                    </div>

                    <div className="app__home-body">
                        
                    </div>
                </div>
            </div>

            <div className="app__home-contact"></div>
        </div>
    )
}

export default Homepage;