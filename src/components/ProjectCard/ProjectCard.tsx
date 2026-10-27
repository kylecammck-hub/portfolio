import "./ProjectCard.css";
import type { Project } from "../../types";
import { ExternalIcon, GithubIcon } from "../Icons/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
      />
      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        {project.description.map((paragraph) => (
          <p className="project-card__text" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <div className="project-card__links">
          <a
            className="button button_small"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={14} />
            Code
          </a>
          <a
            className="button button_small"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalIcon size={14} />
            Live
          </a>
        </div>
      </div>
    </li>
  );
}
