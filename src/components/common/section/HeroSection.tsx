import React from "react";
import { Paper, Container, Grid, Typography, Box } from "@mui/material";

const paperStyle = {
  height: "90vh",
  backgroundImage: "url(https://wallpaperaccess.com/full/476126.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const containerStyle = {
  height: "100%",
};

const gridContainerStyle = {
  height: "100%",
};

type PropTypes = {
  heading: string;
  subheading?: string;
  boxChild?: JSX.Element;
};

export default function HeroSection({
  heading,
  subheading,
  boxChild,
}: PropTypes) {
  return (
    <Paper style={paperStyle}>
      <Container style={containerStyle} maxWidth="md">
        <Grid
          style={gridContainerStyle}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item sm={8}>
            <Typography component="h1" variant="h3">
              {heading}
            </Typography>
            {subheading && <Typography variant="h5">{subheading}</Typography>}
            {boxChild && <Box my={2}>{boxChild}</Box>}
          </Grid>
          <Grid item>Social</Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
