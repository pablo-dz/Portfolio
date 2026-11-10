
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import ScrollReveal from "../ScrollReveal";
import { useLanguage } from "../../contexts/LanguageContext";

function AboutCard() {
  const { isEnglish } = useLanguage();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <ScrollReveal>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              {isEnglish ? (
                <>
                  Hi! I'm <span className="purple">Pablo Díaz</span>, from{" "}
                  <span className="purple">Santiago, Chile</span>.
                  <br />
                  <br />
                  I'm interested in exploring how different disciplines can
                  complement one another to understand and tackle complex
                  problems. My background in astronomy has shaped the way I
                  think through analysis, observation, and the search for
                  explanations, while also sparking my interest in other
                  fields, particularly data science and technology.
                  <br />
                  <br />
                  I enjoy learning new things, experimenting with tools and
                  ideas, and taking on challenges that push me beyond what I
                  know. I'm especially motivated by finding connections across
                  fields of knowledge and turning that curiosity into tangible
                  projects.
                  <br />
                  <br />
                  Outside of work and study, I enjoy:
                </>
              ) : (
                <>
                  ¡Hola! Soy <span className="purple">Pablo Díaz</span>, de{" "}
                  <span className="purple">Santiago, Chile</span>.
                  <br />
                  <br />
                  Me interesa explorar cómo distintas disciplinas pueden
                  complementarse para comprender y abordar problemas
                  complejos. Mi formación en astronomía me ha llevado a
                  desarrollar una manera de pensar basada en el análisis, la
                  observación y la búsqueda de explicaciones, pero también ha
                  despertado mi interés por otras áreas, particularmente la
                  ciencia de datos y la tecnología.
                  <br />
                  <br />
                  Disfruto aprender cosas nuevas, experimentar con
                  herramientas e ideas y enfrentar desafíos que me obliguen a
                  salir de lo conocido. Me motiva especialmente encontrar
                  conexiones entre distintos campos del conocimiento y
                  transformar esa curiosidad en proyectos concretos.
                  <br />
                  <br />
                  Fuera del trabajo y los estudios, disfruto de:
                </>
              )}
            </p>

            <ul>
              <li className="about-activity">
                <ImPointRight />{" "}
                {isEnglish
                  ? "Reading novels, especially those exploring philosophical themes 📚"
                  : "Leer novelas, especialmente aquellas relacionadas con tópicos filosóficos 📚"}
              </li>
              <li className="about-activity">
                <ImPointRight />{" "}
                {isEnglish
                  ? "Playing basketball with friends 🏀"
                  : "Jugar básquetbol con amigos 🏀"}
              </li>
              <li className="about-activity">
                <ImPointRight />{" "}
                {isEnglish
                  ? "Chess and board games ♟️🎲"
                  : "El ajedrez y los juegos de mesa ♟️🎲"}
              </li>
              <li className="about-activity">
                <ImPointRight />{" "}
                {isEnglish
                  ? "Learning to play the electric bass 🎸"
                  : "Aprender a tocar el bajo eléctrico 🎸"}
              </li>
              <li className="about-activity">
                <ImPointRight />{" "}
                {isEnglish
                  ? "Video games, one of my oldest interests 🎮"
                  : "Los videojuegos, uno de mis intereses más antiguos 🎮"}
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "We can only see a short distance ahead, but we can see plenty there that needs to be done."
            </p>
            <footer className="blockquote-footer about-quote-footer">
              — Alan M. Turing
            </footer>
          </blockquote>
        </ScrollReveal>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
