import React, { useRef } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
    const contact_ref = useRef(null);
    const scroll_to_contact = () => contact_ref.current.scrollIntoView({
        behaviour: "smooth"
    });

    return (
        <div className="app__layout w-100 h-100 p-r d-flex flex-column">
            <Navbar scroll_to_contact={scroll_to_contact} />
            <main className="flex-1">
                { children }
            </main>
            <Footer contact_ref={contact_ref} />
        </div>
    )
}

export default Layout;