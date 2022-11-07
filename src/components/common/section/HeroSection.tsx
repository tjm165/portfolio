import React, { useEffect, useState, useRef, useMemo } from "react";
import { Paper, Container, Grid, Typography, Box, Hidden } from "@mui/material";
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
  contentImageSrc?: string;
};

export default function HeroSection({
  heading,
  subheading,
  boxChild,
  contentImageSrc,
}: PropTypes) {
  const [shouldShow, setShouldShow] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  const [ref1, isInViewport1] = useIsInViewport();

  useEffect(() => {
    setShouldShow(isInViewport1 || hasAppeared);
    setHasAppeared(isInViewport1 || hasAppeared);
  });

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
              <Typography component="h1" variant="h3" ref={ref1}>
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

          {contentImageSrc && (
            <Hidden mdDown>
              <Grow in={shouldShow} timeout={2000}>
                <Grid item>
                  <img width="200px" src={contentImageSrc} />
                </Grid>
              </Grow>
            </Hidden>
          )}
        </Grid>
      </Container>
    </Paper>
  );
}

// https://bobbyhadz.com/blog/react-check-if-element-in-viewport
function useIsInViewport() {
  const ref: any = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return [ref, isIntersecting];
}
