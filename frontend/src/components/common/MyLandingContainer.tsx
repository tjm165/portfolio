import * as React from "react";
import { styled } from "@mui/system";
import { Align } from "./section";
import { Typography, Container, Grid, Box, Hidden } from "@mui/material";
import MyDivider from "./section/MyDivider";

type PropTypes = {
  children?: JSX.Element;
  color?: string;
  autoHeight?: boolean;

  headingText?: string;
  subHeadingText?: string;
  alignHeading?: Align;
};

const StyledDiv = styled("div")(({ theme, color }) => ({
  backgroundColor: color,
}));

export default function MyLandingContainer({
  children,
  color,
  autoHeight,

  headingText,
  subHeadingText,
  alignHeading = Align.LEFT,
}: PropTypes) {
  const gridContainerStyle: React.CSSProperties = {
    paddingTop: "10vh",
    alignItems: alignHeading,
    justifyContent: alignHeading,
  };

  const headingStyle: React.CSSProperties = {
    textAlign: alignHeading,
  };

  return (
    <React.Fragment>
      <StyledDiv color={color && color}>
        <Container>
          <Box
            sx={{
              bgcolor: color && color,
              height: autoHeight ? "auto" : "90vh",
            }}
          >
            <>
              <Grid style={gridContainerStyle} container>
                <Grid item style={headingStyle} sm={8}>
                  {headingText && (
                    <Typography component="h1" variant="h3">
                      {headingText}
                    </Typography>
                  )}
                  {subHeadingText && (
                    <Typography variant="h5">{subHeadingText}</Typography>
                  )}
                </Grid>
                {(headingText || subHeadingText) && <MyDivider />}
              </Grid>
              {children && (
                <Grid>
                  <Grid item sm={8}>
                    <Box my={2}>{children}</Box>
                  </Grid>
                </Grid>
              )}
            </>
          </Box>
        </Container>
      </StyledDiv>
    </React.Fragment>
  );
}
