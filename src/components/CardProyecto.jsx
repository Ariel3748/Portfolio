import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function CardProyecto({proyecto}) {


  return (
    <>
      <Card style={{ width: "300px" }}>
        <Card.Body className="text-center">
          <Card.Img variant="top" src={proyecto.imagen} />
          <Card.Title>{proyecto.titulo}</Card.Title>
          <Link to={'/proyectos/' + proyecto.id}><Button> Ver Mas..</Button></Link>
        </Card.Body>
      </Card>
    </>
  );
}
