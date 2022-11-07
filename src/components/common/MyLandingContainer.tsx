import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import COLOR from "./colors";

type PropTypes = {
  children: JSX.Element;
  color: COLOR;
};

export default function MyLandingContainer({ children, color }: PropTypes) {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: color,
        }}
      >
        {" "}
        <Container>
          <Box sx={{ bgcolor: color, height: "90vh" }}>{children}</Box>
        </Container>
      </div>
    </React.Fragment>
  );
}
