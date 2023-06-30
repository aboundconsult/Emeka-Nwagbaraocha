import "../css/gallery.css";
import Header from "../components/header/Header";
import gallery from "../data/gallery";

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
                <div className="app__gallery-body app__container">
                    <div className="app__gallery-fields">
                        <div className="app__gallery-field">
                            <div className="-field_header">
                                <h4> Work </h4>
                                <div>
                                    <h3> Images on set </h3>
                                    <div className="-border_line" />
                                </div>
                            </div>
                            <div className="-field_body -set">
                                {gallery?.highlights?.map((image,index) => (
                                    <div className={`app__gallery-img -gallery-img-${index+1}`} key={image}>
                                        <img src={image.img} alt="Emeka Nwagbaraocha" />
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
                            <div className="-field_body -lifestyle">
                                {gallery?.lifestyle.map((image,index) => (
                                    <div className={`app__gallery-img ${index+1}`} key={image}>
                                        
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