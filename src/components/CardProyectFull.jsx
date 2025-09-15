import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { proyectos } from "../context/ProyectosContext";
import { FaReact, FaBootstrap, FaJs, FaCode, FaGitAlt, FaCss3, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

export function CardProyectFull() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === parseInt(id));

  const iconosTecnologias = {
    javascript: <FaJs size={40} color="#F7DF1E" />,
    react: <FaReact size={40} color="#61DBFB" />,
    bootstrap: <FaBootstrap size={40} color="#7952B3" />,
    firebase: <SiFirebase size={40} color="#FFCA28" />,
    git: <FaGitAlt size={40} color="#F1502F" />,
    css: <FaCss3Alt size={40} color="#61DBFB" />,
    html: <FaHtml5 size={40} color="#F1502F"/>,

        // Wollok no existe → usamos imagen personalizada
    wollok: (
      <img
        src="public/Wollok_Icon.png"
        alt="Wollok"
        style={{ width: "40px", height: "40px" }}
      />
    ),

    // fallback genérico
    default: <FaCode size={40} color="gray" />,
  };

  if (!proyecto) return <p className="pt-5">Proyecto no encontrado</p>;

  return (
    <div className="container my-5 pt-5">
      <div className="row bg-light p-4 align-items-center">
        {/* Imagen */}
        <div className="col-12 col-md-5 text-center">
          <img
            src={proyecto.imagenDescription}
            alt={proyecto.titulo}
            className="img-fluid rounded"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />
        </div>

        {/* Contenido */}
        <div className="col-12 col-md-7 mt-3 mt-md-0">
          <h2 className="text-center text-md-start">{proyecto.titulo}</h2>

          <p className="text-muted">{proyecto.descripcion}</p>

          <div className="mb-3">
            <strong>Cosas aprendidas:</strong>
            <p>{proyecto.aprendizajes}</p>
          </div>

          {/* Tecnologías aplicadas */}
          <div className="d-flex flex-wrap align-items-center mb-3">
            {proyecto.tecnologias.map((tec, index) => (
              <div key={index} className="me-2 mb-2">
                {iconosTecnologias[tec] || iconosTecnologias.default}
              </div>
            ))}
            <span className="ms-2 text-muted">(Tecnologías aplicadas)</span>
          </div>

          {/* Botones */}
          <div className="d-flex gap-3">
            <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={65} color="#6e5494" />
            </a>
            <Button
              variant="success"
              href={proyecto.deploy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Desplegado
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
