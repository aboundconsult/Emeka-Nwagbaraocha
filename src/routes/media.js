import "../css/media.css";
import Header from "../components/header/Header";

const Media = () => {
    return (
        <div className="app__media">
            <div className="app__media-container">
            <div className="app__media-header">
                <Header 
                    title={"Media"}
                    subtitle={"TV Series & Movies"}
                />
            </div>
            <div className="app__media-body section__container">
                <div className="app__media-fields">
                    <div className="app__media-field">
                        <div className="-field_header">
                            <h4> Work </h4>
                            <h3> TV Series </h3>
                        </div>
                        <div className="-field_body">
                            {[1,2,3,4,5,6].map(image => (
                                <div className="app__media-img" key={image}>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="app__media-fields">
                    <div className="app__media-field">
                        <div className="-field_header">
                            <h4> Work </h4>
                            <h3> Movies </h3>
                        </div>
                        <div className="-field_body">
                            {[1,2,3,4,5,6].map(image => (
                                <div className="app__media-img" key={image}>
                                    
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

export default Media;