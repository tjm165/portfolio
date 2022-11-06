import React from "react";
import { Paper, Container, Grid, Typography, Button, Box } from "@mui/material";

// const useStyles = makeStyles(() => ({
//   section: {
//     height: "90vh",
//     backgroundImage: "url(https://wallpaperaccess.com/full/476126.jpg)",
//   },
// }));

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

export default function HeroSection() {
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
              Hi my name is Tommy Moawad. I'm a full stack software engineer.
            </Typography>
            <Typography variant="h5">
              I love serverless, cloud, and data.
            </Typography>
            <Box my={2}>
              <Button
                href="mailto:tom.moawad@gmail.com"
                variant="outlined"
                color="secondary"
              >
                Get in Touch
              </Button>
            </Box>
          </Grid>
          <Grid item>Social</Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
