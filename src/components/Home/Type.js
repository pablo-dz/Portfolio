import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../contexts/LanguageContext";

function Type() {
  const { isEnglish } = useLanguage();

  return (
    <Typewriter
      key={isEnglish ? "en" : "es"}
      options={{
        strings: isEnglish
          ? [
              "Astronomy Graduate",
              "Data Science",
              "Computational Analysis",
              "Programming & Technology",
            ]
          : [
              "Formación en Astronomía",
              "Ciencia de Datos",
              "Análisis Computacional",
              "Programación y Tecnología",
            ],
        autoStart: true,
        loop: true,
        delay: 25,
        typeSpeed: 3,
        deleteSpeed: 5,
        pauseFor: 700,
      }}
    />
  );
}

export default Type;