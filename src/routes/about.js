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
                        <div className="-section_header">
                            <h3> Background </h3>
                        </div>
                        <div className="-section_body"></div>
                    </div>
                    <div className="app__about-section">
                        <div className="-section_header">
                            <h3> Education </h3>
                        </div>
                        <div className="-section_body"></div>
                    </div>
                    <div className="app__about-section">
                        <div className="-section_header">
                            <h3> Journey </h3>
                        </div>
                        <div className="-section_body"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;