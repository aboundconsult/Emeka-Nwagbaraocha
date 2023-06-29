import React from "react";
import "./layout.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Layout = ({ children }) => {
   
    return (
        <div className="app__layout w-100 h-100 d-flex flex-column">
            <Navbar />
            <main className="app__layout-main flex-1">
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default Layout;