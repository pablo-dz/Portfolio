
import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Ruby from "../../Assets/TechIcons/Ruby.svg";
import PHP from "../../Assets/TechIcons/PHP.svg";
import HTML5 from "../../Assets/TechIcons/HTML5.svg";
import LaTeX from "../../Assets/TechIcons/LaTeX.svg";
import MATLAB from "../../Assets/TechIcons/MATLAB.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" className="tech-icon-images" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Ruby} alt="Ruby" className="tech-icon-images" />
        <div className="tech-icons-text">Ruby</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={PHP} alt="PHP" className="tech-icon-images" />
        <div className="tech-icons-text">PHP</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML5} alt="HTML5" className="tech-icon-images" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={LaTeX} alt="LaTeX" className="tech-icon-images" />
        <div className="tech-icons-text">LaTeX</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MATLAB} alt="MATLAB" className="tech-icon-images" />
        <div className="tech-icons-text">MATLAB</div>
      </Col>
    </Row>
  );
}

export default Techstack;
