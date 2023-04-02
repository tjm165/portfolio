import React, { ReactNode } from "react";
import { styled } from "@mui/system";
import { Typography, Container, Grid, Box, Hidden } from "@mui/material";

type PropTypes = {
  children?: ReactNode | ReactNode[];
  color?: string;
  autoHeight?: boolean;
  headingText?: string;
  subHeadingText?: string;
  unsafeIsPageHeader?: boolean;
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
  unsafeIsPageHeader = false,
}: PropTypes) {
  const padding = "2vh";
  const gridContainerStyle: React.CSSProperties = {
    paddingTop: unsafeIsPageHeader ? "10vh" : padding,
    paddingBottom: padding,
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
              <Grid item sm={8}>
                {headingText && (
                  <Typography variant="h3">{headingText}</Typography>
                )}
                {subHeadingText && (
                  <Typography variant="h5">{subHeadingText}</Typography>
                )}
              </Grid>
              {headingText || subHeadingText}
            </Grid>
            {children}
            {children}
          </>
        </Box>
      </Container>
    </StyledDiv>
  );
}
