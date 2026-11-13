import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => () => null);
jest.mock("./components/Home/Spiral", () => () => null);
jest.mock("./components/About/About", () => () => null);
jest.mock("./components/ScrollToTop", () => () => null);
jest.mock("./components/ScrollReveal", () => ({ children }) => children);
jest.mock("./components/PhotoReveal", () => ({ children }) => children);

test("starts in Spanish and switches the page to English", () => {
  render(<App />);

  expect(screen.getByText("Portafolio")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Switch language to English" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Encuéntrame en/i })
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", { name: "Switch language to English" })
  );

  expect(screen.getByText("Portfolio")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Find me on/i })
  ).toBeInTheDocument();
});
