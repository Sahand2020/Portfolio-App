import React from "react";
import { contact } from "../../PortfolioObjects";

// Css
import "./Contact.css";

const Contact = () => {
    if (!contact.email) return null;

    return (
        <section className="section contact center">
            <h2 className="section_title">Contact</h2>
            <a href={`mailto:${contact.email}`}>
                <span type="button" className="btn btn_outline">Email me</span>
            </a>
        </section>
    );
};

export default Contact;
