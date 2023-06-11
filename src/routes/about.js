
import "../css/about.css";
// images
import img1 from "../assets/portfolio6.jpg";

const About = () => {
    return (
        <div className="app__about">
            <div className="app__about-container">
                <div className="app__about-header">
                    <h2> About ME </h2>
                </div>
                
                <div className="app__about-row d-flex gap-4 justify-between">
                    <div className="app__about-col -left">
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid corrupti blanditiis quasi dolore. Porro soluta, ab impedit unde illum optio recusandae, provident suscipit quidem assumenda excepturi hic id doloribus!</p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid corrupti blanditiis quasi dolore. Porro soluta, ab impedit unde illum optio recusandae, provident suscipit quidem assumenda excepturi hic id doloribus!</p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid corrupti blanditiis quasi dolore. Porro soluta, ab impedit unde illum optio recusandae, provident suscipit quidem assumenda excepturi hic id doloribus!</p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid corrupti blanditiis quasi dolore. Porro soluta, ab impedit unde illum optio recusandae, provident suscipit quidem assumenda excepturi hic id doloribus!</p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid corrupti blanditiis quasi dolore. Porro soluta, ab impedit unde illum optio recusandae, provident suscipit quidem assumenda excepturi hic id doloribus!</p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid corrupti blanditiis quasi dolore. Porro soluta, ab impedit unde illum optio recusandae, provident suscipit quidem assumenda excepturi hic id doloribus!</p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid corrupti blanditiis quasi dolore. Porro soluta, ab impedit unde illum optio recusandae, provident suscipit quidem assumenda excepturi hic id doloribus!</p>
                    </div>
                    <div className="app__about-col -right">
                        <div className="-img_box">
                            <img src={img1} alt="Emeka" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;