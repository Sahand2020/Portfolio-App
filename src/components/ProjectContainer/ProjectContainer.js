import React from "react";
import uniqid from "uniqid";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

// Css
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => {
    return (
        <div className="project">
            <h3>{project.name}</h3>

            <p className="project_description">{project.description}</p>

            <div>
                <ul className="project_stack">
                    {project.technologies.map((item) => (
                        <li key={uniqid()} className="project_stack_item">
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="icon_container">
                    <a
                        href={project.sourceCode}
                        className="link link_icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon />
                    </a>

                    <a
                        href={project.livePreview}
                        className="link link_icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LaunchIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectContainer;
