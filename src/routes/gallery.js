import "../css/gallery.css";
import Header from "../components/header/Header";

const Gallery = () => {
    return (
        <div className="app__gallery">
            <div className="app__gallery-container">
                <div className="app__gallery-header">
                    <Header 
                        title={"Gallery"}
                        subtitle={"Moments & Highlights"}
                    />
                </div>
                <div className="app__gallery-body section__container">
                    <div className="app__gallery-fields">
                        <div className="app__gallery-field">
                            <div className="-field_header">
                                <h4> Work </h4>
                                <div>
                                    <h3> Images on set </h3>
                                    <div className="-border_line" />
                                </div>
                            </div>
                            <div className="-field_body">
                                {[1,2,3,4,5,6].map(image => (
                                    <div className="app__gallery-img" key={image}>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="app__gallery-fields">
                        <div className="app__gallery-field">
                            <div className="-field_header">
                                <h4> Lifestyle </h4>
                                <div>
                                    <h3> Daily Lifestyle </h3>
                                    <div className="-border_line" />
                                </div>
                            </div>
                            <div className="-field_body">
                                {[1,2,3,4,5,6].map(image => (
                                    <div className="app__gallery-img" key={image}>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;