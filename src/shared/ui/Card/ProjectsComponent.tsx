import { Link } from "gatsby";
import * as React from "react";
import { projectsList } from "./config";

export const ProjectsComponent = () => {
  return (
    <>
      {projectsList.map((project, index) => (
        <Link
          target="_blank"
          to={`${project.link}`}
          className="card"
          key={index}
        >
          <span className="title">{project.title}</span>
          <img
            className={`screenshot ${project.title}`}
            src={project.img}
            alt={project.title}
          />
          <strong className="skill">{project.skill}</strong>
        </Link>
      ))}
    </>
  );
};
