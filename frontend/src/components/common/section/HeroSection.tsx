import React, { useEffect, useState, useRef, useMemo } from "react";
import { Paper, Container, Grid, Typography, Box, Hidden } from "@mui/material";
import { splitNewLines } from "../utils";

const imgStyle: React.CSSProperties = {
  borderRadius: "50%",
  height: "50vw",
  width: "50vw",
  maxHeight: "50vh",
  maxWidth: "50vh",
  objectFit: "cover",
};

type PropTypes = {
  heading: string;
  subheading?: string;
  boxChild?: JSX.Element;
  contentImageSrc?: string;
  backgroundImageSrc?: string;
  height?: string;
};

type HeroImageProps = {
  src?: string;
  top: boolean;
};

function HeroImage({ src, top }: HeroImageProps) {
  return src ? (
    <Hidden mdDown={!top} mdUp={top}>
      <Grid item sm={4}>
        <img style={imgStyle} src={src} />
      </Grid>
    </Hidden>
  ) : (
    <></>
  );
}

export default function HeroSection({
  heading,
  subheading,
  boxChild,
  contentImageSrc,
  backgroundImageSrc,
  height,
}: PropTypes) {
  const paperStyle = {
    height: height || "90vh",
    backgroundImage: `url(${backgroundImageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    whiteSpace: "pre-line",
  };

  const containerStyle: React.CSSProperties = {
    height: "100%",
    zIndex: 100,
    position: "relative",
  };

  const gridContainerStyle: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "90vh",
    position: "absolute",
    zIndex: 2,
  };

  const [shouldShow, setShouldShow] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  const [ref1, isInViewport1] = useIsInViewport();

  useEffect(() => {
    setShouldShow(isInViewport1 || hasAppeared);
    setHasAppeared(isInViewport1 || hasAppeared);
  });

  return (
    //@ts-ignore style doesn't like whiteSpace
    <Paper style={paperStyle} elevation={0}>
      {backgroundImageSrc && <div style={overlayStyle}></div>}
      <Container style={containerStyle} maxWidth="md">
        <Grid
          style={gridContainerStyle}
          container
          alignItems="center"
          alignContent="center"
          justifyContent="space-between"
        >
          <Grid item sm={8}>
            <HeroImage top={true} src={contentImageSrc} />
            <Typography component="h1" variant="h3" ref={ref1}>
              {splitNewLines(heading).map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </Typography>

            {(subheading || boxChild) && (
              <>
                {subheading && (
                  <Typography variant="h5">{subheading}</Typography>
                )}
                {boxChild && <Box my={2}>{boxChild}</Box>}
              </>
            )}
          </Grid>

          <HeroImage top={false} src={contentImageSrc} />
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
