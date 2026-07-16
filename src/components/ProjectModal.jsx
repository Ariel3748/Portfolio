import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { getDriveImageUrl } from "../utils/driveImage";

export default function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  const images = project.images || [];

  useEffect(() => {
    closeBtnRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goNext() {
    setImageIndex((i) => (i + 1) % images.length);
  }

  function goPrev() {
    setImageIndex((i) => (i - 1 + images.length) % images.length);
  }

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h3 id="modal-title">{project.title}</h3>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            ref={closeBtnRef}
            aria-label="Cerrar"
          >
            <Icon name="x-lg" />
          </button>
        </div>

        <div className="modal-body">
          {images.length > 0 && (
            <div className="modal-gallery">
              <img
                src={getDriveImageUrl(images[imageIndex])}
                alt={`Captura ${imageIndex + 1} de ${project.title}`}
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="modal-gallery-nav prev"
                    onClick={goPrev}
                    aria-label="Imagen anterior"
                  >
                    <Icon name="chevron-left" />
                  </button>
                  <button
                    type="button"
                    className="modal-gallery-nav next"
                    onClick={goNext}
                    aria-label="Imagen siguiente"
                  >
                    <Icon name="chevron-right" />
                  </button>
                  <div className="modal-gallery-dots">
                    {images.map((img, idx) => (
                      <span key={img} className={idx === imageIndex ? "active" : ""} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <p className="modal-desc">{project.description}</p>

          <ul className="tech-list">
            {project.technologies?.map((tech) => (
              <li key={tech} className="tech-pill">
                {tech}
              </li>
            ))}
          </ul>

          <div className="modal-actions">
            {project.demoUrl && (
              <a
                className="btn btn-primary"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="box-arrow-up-right" />
                Ver desplegado
              </a>
            )}
            {project.repoUrl && (
              <a
                className="btn"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" />
                Ver repositorio
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
