import React, { useState } from "react";
import "./movies.css";

const Movies = () => {
    const [ active, setActive ] = useState("all");
    return (
        <div className="app__movies section__container" id="movies">
            <div className="app__movies-container">
                <div className="app__movies-header">
                    <h2> Movies Featured In </h2>
                    <div className="app__movies-header_nav -filters d-flex item-center gap-0 justify-center flex-wrap">
                        <div 
                            className={`-filter ${active === "all" ? "-active" : ""}`}
                            onClick={()=> setActive("all")}
                        >
                            <span> All </span>
                        </div>
                        <div 
                            className={`-filter ${active === "series" ? "-active" : ""}`}
                            onClick={()=> setActive("series")}
                        >
                            <span> TV Series </span>
                        </div>
                        <div 
                            className={`-filter ${active === "movie" ? "-active" : ""}`}
                            onClick={()=> setActive("movie")}
                        >
                            <span> Movies </span>
                        </div>
                    </div>
                </div>
                <div className="app__movies-body -posters gap-3">
                    {[1,2,3,4,5,6].map(movie => (
                        <div className="-poster" key={movie}>
                            <div className="-poster_img"></div>
                            <div className="-poster_details">
                                <h4> Far From Home</h4>
                                <h5> TV Series - Action/Adventure </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movies;