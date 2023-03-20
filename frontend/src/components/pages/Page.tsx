import { Typography, Container, Grid, Box, Hidden } from "@mui/material";
import { MyDivider } from "../common";
import { Align } from "../common/section"; // todo put this in common

type PropTypes = {
  headingText?: string;
  subHeadingText?: string;
  alignHeading?: Align;
  children?: JSX.Element[];
};

export default function Page({
  headingText,
  subHeadingText,
  alignHeading = Align.LEFT,
  children,
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
  );
}
