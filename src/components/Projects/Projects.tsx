import { useState } from "react";
import "./Projects.css";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const PAGE_SIZE = 3;

export function Projects() {
  const [numberShown, setNumberShown] = useState(
    Math.min(projects.length, PAGE_SIZE),
  );

  function showMore() {
    setNumberShown((shown) => Math.min(shown + PAGE_SIZE, projects.length));
  }

  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <h2 className="section__title">Projects</h2>
        <ul className="projects__list">
          {projects.slice(0, numberShown).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
        {projects.length > PAGE_SIZE && numberShown < projects.length && (
          <div className="projects__more">
            <button
              className="button button_secondary"
              type="button"
              onClick={showMore}
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
