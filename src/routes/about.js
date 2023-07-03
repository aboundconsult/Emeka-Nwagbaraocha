import "../css/about.css";
import Header from "../components/header/Header";

const About = () => {
    return (
        <div className="app__about">
            <div className="app__about-container">
                <div className="app__about-header">
                    <Header 
                        title={"About Me"}
                        subtitle={"Background & Journey"}
                    />
                </div>
                <div className="app__about-body section__container">
                    <div className="app__about-section">
                        <div className="app__about-row d-flex item-center justify-center gap-4
                            ">
                                <div className="app__about-col -left -img-section">
                                    <div className="-img-box">
                                        <div className="-img-overlay" />
                                        <div className="-img"></div>
                                    </div>
                                </div>
                                <div className="app__about-col -right -text-section">
                                    <div className="-text-header">
                                        <h3> Background </h3>
                                    </div>
                                    <div className="-text-body">
                                        <div className="-text-field">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                        </div>
                                        <div className="-text-field">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="app__about-section">
                        <div className="app__about-row d-flex item-center justify-center gap-4">
                            <div className="app__about-col -left -text-section">
                                <div className="-text-header">
                                    <h3> Education </h3>
                                </div>
                                <div className="-text-body">
                                    <div className="-text-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                    </div>
                                    <div className="-text-field">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="app__about-col -right -img-section">
                                <div className="-img-box">
                                    <div className="-img-overlay" />
                                    <div className="-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="app__about-section">
                        <div className="app__about-row d-flex item-center justify-center gap-4
                            ">
                                <div className="app__about-col -left -img-section">
                                    <div className="-img-box">
                                        <div className="-img-overlay" />
                                        <div className="-img"></div>
                                    </div>
                                </div>
                                <div className="app__about-col -right -text-section">
                                    <div className="-text-header">
                                        <h3> Journey </h3>
                                    </div>
                                    <div className="-text-body">
                                        <div className="-text-field">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                        </div>
                                        <div className="-text-field">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum eaque similique nulla ab sed aliquid, reiciendis est autem officia, consequuntur laudantium eum nihil consectetur dicta distinctio, voluptates suscipit aut. </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;