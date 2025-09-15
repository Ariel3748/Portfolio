import { Button } from "react-bootstrap";
import { FaGitAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";

export function Contacto() {
  return (
    <>
      <div className="container my-5 pt-5" id="contacto">
        <h2>Contacto</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-4">
          <div className="col">
            <Button
              className="w-100 d-flex flex-column align-items-center justify-content-center"
              rel="noopener noreferrer"
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/ariel-agus-oliva"
            >
              <FaLinkedin size={65} color="#000000ff" />
              LinkedIn
            </Button>
          </div>

          <div className="col">
            <Button
              className="w-100 d-flex flex-column align-items-center justify-content-center"
              rel="noopener noreferrer"
              as="a"
              target="_blank"
              href="https://github.com/Ariel3748"
            >
              <FaGithub size={65} color="#000000ff" />
              Github
            </Button>
          </div>

          <div className="col">
            <Button
              className="w-100 d-flex flex-column align-items-center justify-content-center"
              as="a"
              href="src/assets/resume/Cv_pasantia.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoNewspaper size={65} color="#000000ff" />
              C.V
            </Button>
          </div>

          <div className="col">
            <Button
              rel="noopener noreferrer"
              as="a"
              target="_blank"
              href="mailto:ariel.oliva3748@gmail.com"
              className="w-100 d-flex flex-column align-items-center justify-content-center"
            >
              <IoMdMail size={65} color="#000000ff" />
              Mail
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
