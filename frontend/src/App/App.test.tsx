import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./index";
import { HomeV2 } from "../components/pages";

test("renders learn react link", () => {
  render(<App view={<HomeV2 />} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
