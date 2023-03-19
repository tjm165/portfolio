import * as React from "react";
import { styled } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import COLOR from "./colors";
import { Button } from "@mui/material";

type PropTypes = {
  children: JSX.Element;
  color?: string;
  autoHeight?: boolean;
};

const StyledDiv = styled("div")(({ theme, color }) => ({
  backgroundColor: color,
}));

export default function MyLandingContainer({
  children,
  color,
  autoHeight,
}: PropTypes) {
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
            {children}
          </Box>
        </Container>
      </StyledDiv>
    </React.Fragment>
  );
}
