import { Button } from "react-bootstrap";

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
              <img
                src="../src/assets/icons/LinkedInLogo.webp"
                alt="LinkedIn"
                style={{ width: "65px", height: "65px", padding: "3px" }}
              />
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
              <img
                src="../src/assets/icons/GithubIcon.png"
                alt="Github"
                style={{ width: "65px", height: "65px", padding: "3px" }}
              />
              Github
            </Button>
          </div>

          <div className="col">
            <Button
              className="w-100 d-flex flex-column align-items-center justify-content-center"
              as="a"
              href="../src/assets/resume/Cv_pasantia.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/icons/ResumeIcon.png"
                alt="C.V"
                style={{ width: "65px", height: "65px", padding: "3px" }}
              />
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
              <img
                src="../src/assets/icons/MailIcon.png"
                alt="Mail"
                style={{ width: "65px", height: "65px", padding: "3px" }}
              />
              Mail
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
