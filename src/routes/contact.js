import { useState  } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import Header from "../components/header/Header";
import "../css/contact.css";

const Contact = () => {
    const [ loading, set_loading ] = useState(false);
    const [ name, set_name ] = useState("");
    const [ address, set_address ] = useState("");
    const [ email, set_email ] = useState("");
    const [ phone, set_phone ] = useState("");
    const [ message, set_message ] = useState("");
    const handle_submit = (e) => {
        e.preventDefault();
        set_loading(true);

        try {
            
        } catch (error) {
            
        } finally {
            set_loading(false);
        }
    }

    return (
        <div className="app__contact">
            <div className="app__contact-container">
                <div className="app__contact-header">
                    <Header 
                        title={"Contact Me"}
                        subtitle={"Love to hear from you, Get in Touch"}
                        Icon={MdWavingHand}
                    />
                </div>

                <div className="app__contact-body section__container">
                    <div className="app__contact-form">
                        <form onSubmit={(e) => handle_submit(e)}>
                            <div className="app__contact-form_field">
                                <div className="app__form-row d-flex gap-4">
                                    <div className="app__form-col">
                                        <label htmlFor="name"> Your Name </label>
                                        <input 
                                            name="name"
                                            type="text" 
                                            placeholder="Enter Your Full Name"
                                            value={name}
                                            onChange={(e) => set_name(e.target.value)}
                                        />
                                    </div>
                                    <div className="app__form-col">
                                        <label htmlFor="email"> Your Email </label>
                                        <input 
                                            name="email"
                                            type="email"
                                            placeholder="Enter Your Email Address" 
                                            value={email}
                                            onChange={(e) => set_email(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="app__contact-form_field">
                                <div className="app__form-row d-flex gap-4">
                                    <div className="app__form-col">
                                        <label htmlFor="phone"> Your Phone Number </label>
                                        <input 
                                            name="phone"
                                            type="text" 
                                            placeholder="Enter Your Phone Number"
                                            value={phone}
                                            onChange={(e) => set_phone(e.target.value)}
                                        />
                                    </div>
                                    <div className="app__form-col">
                                        <label htmlFor="address"> Address </label>
                                        <input 
                                            name="address"
                                            type="address"
                                            placeholder="Enter Your Address" 
                                            value={address}
                                            onChange={(e) => set_address(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="app__contact-form_field">
                                <div className="app__form-row">
                                    <div className="app__form-col">
                                        <label htmlFor="message"> Your Message </label>
                                        <textarea 
                                            name="message"  
                                            value={message}
                                            placeholder="Enter your Message for Emeka Nwagbaraocha here:"
                                            onChange={(e)=> set_message(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="app__form-button">
                                <button 
                                    className="app__form-submit d-flex gap-1 item-center justify-center"
                                    disabled={loading}
                                >
                                    <span> Send Message </span>
                                    <BsArrowUpRight />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;