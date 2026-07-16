import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects.json";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">// projects</p>
        <h2 className="section-title">Proyectos</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
