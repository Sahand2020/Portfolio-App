import React from "react";
import { header } from "../../PortfolioObjects";

// Components
import Navbar from "../Navbar/Navbar";

// Css
import "./Header.css"

const Header = () => {
    const { homepage, title } = header;

    return (
        <header className="header center">
            <h3>
                <a href={homepage} className="link">{title}</a>
            </h3>
            <Navbar />
        </header>
    );
};

export default Header;
