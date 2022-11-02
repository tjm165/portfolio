import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type PropTypes = {
  children: React.ReactElement;
};

export default function MyBody(props: PropTypes) {
  return (
    <Container>
      <Box sx={{ my: 2 }}>{props.children}</Box>
    </Container>
  );
}
