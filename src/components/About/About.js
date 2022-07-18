import React from "react";
import { introduce } from "../../PortfolioObjects";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

// Css
import "./About.css";

const About = () => {
    const { name, job, description, social, resume } = introduce;

    return (
        <div className="about center">
            <h1 className="name_container">
                Hi, I am <span className="about_name">{name}</span>
            </h1>

            <h2 className="about_job">A {job}.</h2>
            <p className="about_desc">{description && description}</p>

            <div className="about_container center">
                <a href={resume} target="_blank" rel="noreferrer">
                    <span type="button" className="btn btn_outline">
                        Resume
                    </span>
                </a>

                <div>
                    <a
                        href={social.github}
                        className="link link_icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href={social.instagram}
                        className="link link_icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
