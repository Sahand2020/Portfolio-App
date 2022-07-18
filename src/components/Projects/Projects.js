import React from "react";
import { projects } from "../../PortfolioObjects";

// Components
import ProjectContainer from "../ProjectContainer/ProjectContainer";

// Css
import "./Projects.css";

const Projects = () => {
    if (!projects.length) return null;
    return (
        <section id="projects" className="section projects">
            <h2 className="section_title">Projects</h2>
            <div className="projects_grid">
                {projects.map((project) => (
                    <ProjectContainer key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
