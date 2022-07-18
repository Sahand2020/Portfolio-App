import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("light");

    useEffect(() => {
        const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
        setThemeName(darkMedia.matches ? "dark" : "light");
        darkMedia.addEventListener("change", (e) => {
            setThemeName(e.matches ? "dark" : "light");
        });
    }, []);

    const toggleTheme = () => {
        const name = themeName === "dark" ? "light" : "dark";
        localStorage.setItem("themeName", name);
        setThemeName(name);
    };

    return (
        <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
