import React from "react";
import { skills } from "../../PortfolioObjects";
import uniqid from "uniqid";

// Css
import "./Skills.css";

const Skills = () => {
    if (!skills.length) return null;
    return (
        <section className="section skills" id="skills">
            <h2 className="section_title">Skills</h2>
            <ul className="skills_list">
                {skills.map((skill) => (
                    <li
                        key={uniqid()}
                        className="skills_list_item btn btn_plain"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
