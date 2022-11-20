import React, { useEffect, useState, useRef, useMemo } from "react";
import { Paper, Container, Grid, Typography, Box, Hidden } from "@mui/material";

const imgStyle: React.CSSProperties = {
  borderRadius: "50%",
  height: "50vw",
  width: "50vw",
  maxHeight: "50vh",
  maxWidth: "50vh",
  objectFit: "cover",
};

type PropTypes = {
  children?: JSX.Element;
};

export default function BodySection({ children }: PropTypes) {
  const containerStyle: React.CSSProperties = {
    height: "100%",
    zIndex: 100,
    position: "relative",
  };

  const gridContainerStyle: React.CSSProperties = {
    height: "100%",
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "90vh",
    position: "absolute",
    zIndex: 2,
  };

  return (
    <Paper elevation={0}>
      <Container style={containerStyle} maxWidth="md">
        <Grid
          style={gridContainerStyle}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item sm={8}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
