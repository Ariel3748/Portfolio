import { proyectos } from "../context/ProyectosContext";
import { CardProyecto } from "./CardProyecto";

export function Proyectos() {
  function traerProyecto(id) {
    return proyectos.find((p) => p.id === parseInt(id));
  }

  var proyecto0 = traerProyecto(0);

  return (
    <>
      <div className="container my-5 pt-5" id="proyectos">
        <h2>Proyectos</h2>
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-4">
            {proyectos.map((pIndividual) => (
              <div className="col">
                <CardProyecto proyecto={pIndividual} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
