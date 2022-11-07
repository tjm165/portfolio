import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Grid,
  Typography,
  Box,
  Hidden,
  Zoom,
} from "@mui/material";
import Grow from "@mui/material/Grow";

const paperStyle = {
  height: "90vh",
  backgroundImage: "url(https://wallpaperaccess.com/full/476126.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

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
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true));

  return (
    <Paper style={paperStyle}>
      <div style={overlayStyle}></div>
      <Container style={containerStyle} maxWidth="md">
        <Grid
          style={gridContainerStyle}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item sm={8}>
            <Grow in={shouldShow} timeout={1000}>
              <Typography component="h1" variant="h3">
                {heading}
              </Typography>
            </Grow>

            {(subheading || boxChild) && (
              <Grow in={shouldShow} timeout={2000}>
                <span>
                  {subheading && (
                    <Typography variant="h5">{subheading}</Typography>
                  )}
                  {boxChild && <Box my={2}>{boxChild}</Box>}
                </span>
              </Grow>
            )}
          </Grid>

          <Hidden mdDown>
            <Grid item>
              <img
                width="200px"
                src="https://www.pngfind.com/pngs/m/693-6932035_transparent-background-halloween-pumpkin-clipart-hd-png-download.png"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}
