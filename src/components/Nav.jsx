import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';

function BarraNav() {
  return (
    <>
 <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        {/* Logo o nombre */}
        <Navbar.Brand href="/Portfolio">Mi Portfolio</Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
              <Nav.Link as={HashLink} smooth to="/#about_me">Sobre Mí</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/#proyectos">Proyectos</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default BarraNav;
