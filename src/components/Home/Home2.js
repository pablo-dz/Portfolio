
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import personalPortrait from "../../Assets/retrato-personal.png";
import Tilt from "react-parallax-tilt";
import ScrollReveal from "../ScrollReveal";
import PhotoReveal from "../PhotoReveal";
import { useLanguage } from "../../contexts/LanguageContext";

function Home2() {
  const { isEnglish } = useLanguage();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {isEnglish ? "ABOUT " : "SOBRE "}
              <span className="purple">{isEnglish ? " ME" : " MÍ "}</span>
            </h1>

            <ScrollReveal as="p" className="home-about-body">
              {isEnglish ? (
                <>
                  I am a{" "}
                  <b className="purple">Bachelor of Astronomy</b> graduate
                  from Pontificia Universidad Católica de Chile. My academic
                  background has given me a strong foundation in mathematics,
                  programming, and statistical analysis, and sparked my
                  particular interest in <b className="purple">Data Science</b>.
                  <br />
                  <br />
                  As a research assistant, I analyzed spectroscopic data from
                  14 merging galaxies and developed{" "}
                  <b className="purple">Python pipelines</b> to process
                  observations from the VLT/MUSE instrument. Using statistical
                  models and optimization methods, I studied the physical and
                  kinematic properties of these systems.
                  <br />
                  <br />
                  I have also applied computational tools in other contexts,
                  including processing and structuring information with{" "}
                  <b className="purple">SQL</b> during my work at CONAF. I have
                  also developed <b className="purple">machine learning</b>{" "}
                  projects, using algorithms such as Random Forest to analyze
                  astronomical data from the GALAH catalog.
                  <br />
                  <br />
                  My main professional interests are in{" "}
                  <i>
                    <b className="purple">
                      machine learning, artificial intelligence, and
                      predictive model development
                    </b>
                  </i>
                  . I am motivated by exploring how mathematical and
                  computational tools can extract knowledge from data and
                  address complex problems across different fields.
                </>
              ) : (
                <>
                  Soy <b className="purple">Licenciado en Astronomía</b> de la
                  Pontificia Universidad Católica de Chile. Mi formación
                  académica me ha permitido desarrollar una sólida base en
                  matemáticas, programación y análisis estadístico, áreas que
                  han despertado mi especial interés por la{" "}
                  <b className="purple">Ciencia de Datos</b>.
                  <br />
                  <br />
                  Durante mi experiencia como asistente de investigación,
                  trabajé en el análisis de datos espectroscópicos de 14
                  galaxias en proceso de fusión, desarrollando{" "}
                  <b className="purple">pipelines en Python</b> para procesar
                  observaciones del instrumento VLT/MUSE. Mediante modelos
                  estadísticos y métodos de optimización, estudié las
                  propiedades físicas y cinemáticas de estos sistemas.
                  <br />
                  <br />
                  También he aplicado herramientas computacionales en otros
                  contextos, como el procesamiento y estructuración de
                  información mediante <b className="purple">SQL</b> durante
                  mi experiencia en CONAF. Asimismo, he desarrollado proyectos
                  de <b className="purple">Machine Learning</b>, utilizando
                  algoritmos como Random Forest para analizar datos
                  astronómicos del catálogo GALAH.
                  <br />
                  <br />
                  Mis principales intereses profesionales se encuentran en el{" "}
                  <i>
                    <b className="purple">
                      aprendizaje automático, la inteligencia artificial y el
                      desarrollo de modelos predictivos
                    </b>
                  </i>
                  . Me motiva explorar cómo las herramientas matemáticas y
                  computacionales permiten extraer conocimiento de los datos y
                  abordar problemas complejos en distintas áreas.
                </>
              )}
            </ScrollReveal>
          </Col>

          <Col md={4} className="myAvtar">
            <PhotoReveal className="personal-photo-reveal">
              <Tilt>
                <img
                  src={personalPortrait}
                  className="img-fluid"
                  alt="Retrato personal"
                />
              </Tilt>
            </PhotoReveal>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
