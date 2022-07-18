import React, { useState, useEffect } from "react";

// icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Css
import "./ScrollTop.css";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return isVisible ? (
        <div className="scroll-top">
            <a href="#top">
                <ArrowUpwardIcon className="arrow" />
            </a>
        </div>
    ) : null;
};

export default ScrollTop;
