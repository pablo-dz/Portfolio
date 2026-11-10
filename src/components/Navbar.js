
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useLanguage } from "../contexts/LanguageContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isEnglish, toggleLanguage } = useLanguage();

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "navbar sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
        <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                {isEnglish ? "Home" : "Inicio"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                {isEnglish ? "About me" : "Sobre mí"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {isEnglish ? "Projects" : "Proyectos"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} />{" "}
                {isEnglish ? "Resume" : "CV"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/pablo-dz"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
              >
                <AiFillGithub style={{ fontSize: "1.2em" }} /> GitHub
              </Button>
            </Nav.Item>
            <Nav.Item
              className={`language-toggle-item${isEnglish ? " is-english" : ""}`}
            >
              <span className="language-code language-code-es" aria-hidden="true">
                ESP
              </span>
              <button
                type="button"
                className="language-toggle"
                onClick={toggleLanguage}
                aria-label={
                  isEnglish ? "Cambiar idioma a español" : "Switch language to English"
                }
                aria-pressed={isEnglish}
                title={isEnglish ? "Switch to Spanish" : "Cambiar a inglés"}
              >
                <span className="language-toggle-knob" aria-hidden="true" />
              </button>
              <span className="language-code language-code-en" aria-hidden="true">
                EN
              </span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
