import React, { ReactNode } from "react";
import { styled } from "@mui/system";
import { Align } from "./section";
import { Typography, Container, Grid, Box, Hidden } from "@mui/material";
import MyDivider from "./section/MyDivider";

type PropTypes = {
  children?: ReactNode | ReactNode[];
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
    paddingTop: "1vh",
    paddingBottom: "1vh",
    alignItems: alignHeading,
    justifyContent: alignHeading,
  };

  const headingStyle: React.CSSProperties = {
    textAlign: alignHeading,
  };

  return (
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
            {children}
          </>
        </Box>
      </Container>
    </StyledDiv>
  );
}
