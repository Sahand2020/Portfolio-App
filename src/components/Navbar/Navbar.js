/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { projects, skills, contact } from "../../PortfolioObjects";

// Css
import "./Navbar.css";

// icons
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Context
import { ThemeContext } from "../../context/ThemeContextProvider";

const Navbar = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);
    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className="center nav">
            <ul
                style={{ display: showNavList ? "flex" : null }}
                className="nav_list"
            >
                {projects.length ? (
                    <li className="nav_list_item">
                        <a
                            href="#projects"
                            onClick={toggleNavList}
                            className="link link_nav"
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className="nav_list_item">
                        <a
                            href="#skills"
                            onClick={toggleNavList}
                            className="link link_nav"
                        >
                            Skills
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className="nav_list_item">
                        <a
                            href="#contact"
                            onClick={toggleNavList}
                            className="link link_nav"
                        >
                            Contact
                        </a>
                    </li>
                ) : null}
            </ul>

            <button onClick={toggleTheme} className="btn btn_icon nav_theme">
                {themeName === "dark" ? (
                    <WbSunnyRoundedIcon />
                ) : (
                    <Brightness2Icon />
                )}
            </button>

            <button onClick={toggleNavList} className="btn btn_icon nav_hamburger">
                {showNavList ? <CloseIcon/> : <MenuIcon />}
            </button>
        </nav>
    );
};

export default Navbar;
