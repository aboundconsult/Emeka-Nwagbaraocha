import "../css/home.css";
import { Link } from "react-router-dom";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import img1 from "../assets/portfolio5.jpg";

const Homepage = () => {
    return (
        <div className="app__home">
            <div className="app__home-hero">
                <div className="app__home-hero_container section__container">
                    <div className="app__home-hero_row d-flex item-center">
                        <div className="app__home-hero_col -left">
                            <h2> Actor, Model & Scriptwriter </h2>
                            <h1> Emeka  <span> Nwagbaraocha </span> </h1>
                            <div className="-socials d-flex gap-1 justify-between item-center">
                                <ul className="d-flex item-center gap-2">
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
                        <div className="app__home-hero_col -right">
                            <div className="img-box"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app__home-about">
                <div className="app__home-about_container section__container">
                    <div className="app__home-row d-flex gap-4 item-center">
                        <div className="app__home-col -left">
                            <div className="-img_box">
                                <img src={img1} alt="Emeke Nwagbarocha" />
                            </div>
                        </div>
                        <div className="app__home-col -right">
                            <div className="-text">
                                <div className="-text_header">
                                    <h4> About </h4>
                                    <h3> My Story </h3>
                                    <div className="-border_line" />
                                </div>

                                <div className="-fields">
                                    <div className="-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis dignissimos dicta maiores, itaque molestias? Iure debitis minus nobis sint, minima facilis? Magnam esse dolor iste nam corrupti, earum quaerat.</p>
                                    </div>
                                    <div className="-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis dignissimos dicta maiores, itaque molestias? Iure debitis minus nobis sint, minima facilis? Magnam esse dolor iste nam corrupti, earum quaerat.</p>
                                    </div>
                                    <div className="-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis dignissimos dicta maiores, itaque molestias? Iure debitis minus nobis sint, minima facilis? Magnam esse dolor iste nam corrupti, earum quaerat.</p>
                                    </div>
                                    <div className="-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis dignissimos dicta maiores, itaque molestias? Iure debitis minus nobis sint, minima facilis? Magnam esse dolor iste nam corrupti, earum quaerat.</p>
                                    </div>
                                    <div className="-field">
                                        <Link to="/about">
                                            <span> More About Me </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app__home-quote">
                <div className="app__home-container section__container">
                    <div className="app__home-row">
                        <h3> “Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis dignissimos dicta maiores, itaque molestias? Iure debitis minus nobis sint, minima facilis? Magnam esse dolor iste nam corrupti, earum quaerat.” </h3>
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
                        <div className="-gallery_grid">
                            {[1,2,3,4].map(image => (
                                <div className={`-grid_item -item-${image}`} key={image}>
                                    <img src={img1} alt={"Emeka Nwagbaraocha"} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="app__home-contact"></div>
        </div>
    )
}

export default Homepage;