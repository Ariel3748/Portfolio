import { ListGroup } from "react-bootstrap";
import "../styles/AboutMe.css";
import { Card, Row, Col } from "react-bootstrap";
import { FaReact, FaJava, FaJs, FaGitAlt } from "react-icons/fa";

function AboutMe() {
  return (
    <>
      <div className="container my-5 pt-5" id="about_me">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="p-2 ms-5" style={{ color: "#0d6efd" }}>
              Ariel Oliva
            </h1>
            <h2 className="p-2 fw-semibold text-muted">
              Estudiante de Lic. en Informatica
            </h2>
            <hr className="w-100 mx-auto mb-4" />
            <p className=" about-text mx-auto">
              Soy estudiante de la carrera de Licenciatura en Informática en la
              Universidad Nacional de Hurlingham. Tengo formación en desarrollo
              web, con experiencia en proyectos académicos y personales en
              JavaScript, React, Python y Java, además de bases sólidas en
              programación orientada a objetos y resolución de problemas.
            </p>
            <p className=" about-text mx-auto">
              Me considero una persona creativa, disciplinada y con gran
              curiosidad intelectual. Disfruto aprender constantemente, trabajar
              en equipo y aportar ideas que enriquezcan los proyectos.
            </p>
            <p className=" about-text mx-auto">
              Me motiva enfrentar desafíos, mantener una actitud de mejora
              continua y compartir conocimientos con quienes me rodean. Estoy en
              búsqueda de nuevos desafíos en el mundo del desarrollo de software
              que me permitan aplicar y expandir mis conocimientos. Aspiro a
              especializarme en back-end y ciberseguridad, contribuyendo con
              soluciones tecnológicas que tengan impacto real.
            </p>
          </div>

          {/* Imagen */}
          <div className="col-md-6 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGNdWrrg9kiaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711133867143?e=1760572800&v=beta&t=gOB2JQfLauLTvr9oVlIo1Su-0vCXrsO4K-rYr3fkymo"
              alt="Ariel Oliva"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "250px" }}
            />
          </div>
        </div>
        <div className="mt-5">
          <h2 className="mb-4">Skills</h2>
          <Row className="g-3">
            <Col md={3}>
              <Card className="text-center shadow-sm p-3">
                <FaJs size={40} color="#F7DF1E" />
                <Card.Body>JavaScript</Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center shadow-sm p-3">
                <FaReact size={40} color="#61DBFB" />
                <Card.Body>React</Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center shadow-sm p-3">
                <FaJava size={40} color="#E76F00" />
                <Card.Body>Java</Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center shadow-sm p-3">
                <FaGitAlt size={40} color="#F1502F" />
                <Card.Body>Git</Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
