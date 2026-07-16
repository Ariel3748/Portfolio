import Icon from "./Icon";
import { getDriveImageUrl } from "../utils/driveImage";

export default function ProjectCard({ project, onOpen }) {
  const cover = project.images?.[0] ? getDriveImageUrl(project.images[0]) : null;

  return (
    <button type="button" className="project-card" onClick={() => onOpen(project)}>
      <div className="project-card-image">
        {cover ? (
          <img src={cover} alt={`Captura de ${project.title}`} loading="lazy" />
        ) : null}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.shortDescription}</p>

        <ul className="tech-list">
          {project.technologies?.slice(0, 4).map((tech) => (
            <li key={tech} className="tech-pill">
              {tech}
            </li>
          ))}
        </ul>

        <span className="project-card-footer">
          Ver detalle
          <Icon name="arrow-right" />
        </span>
      </div>
    </button>
  );
}
