
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Spiral from "./Spiral";
import ContactForm from "../ContactForm";
import { useLanguage } from "../../contexts/LanguageContext";

function Home() {
  const { isEnglish } = useLanguage();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle supernovae />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {isEnglish ? "Hello World!" : "¡Hola Mundo!"}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {isEnglish ? "I'M" : "SOY"}
                <strong className="main-name"> PABLO DÍAZ</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

           <Col md={5} className="home-visual">
            <Spiral />
           </Col>

          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>{isEnglish ? "Find me on" : "Encuéntrame en"}</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pablo-dz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/paaldz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>

            <p className="contact-intro">
              {isEnglish ? "Feel free to " : "Siéntete libre de "}
              <span className="purple">
                {isEnglish ? "connect" : "conectar"}
              </span>
              {isEnglish ? " with me." : " conmigo."}
            </p>

            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
