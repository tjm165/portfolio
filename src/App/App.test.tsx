import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./index";
import { Home } from "../components/pages";

test("renders learn react link", () => {
  render(<App view={<Home />} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
