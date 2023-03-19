import { Typography, Container, Grid, Box, Hidden } from "@mui/material";
import MyDivider from "./MyDivider";
import { Align } from "./SimpleSection";

type PropTypes = {
  headingText: string;
  subHeadingText?: string;
  children?: JSX.Element;
};

export default function SimpleSection({ headingText, children }: PropTypes) {
  const alignHeading = Align.LEFT;
  const gridContainerStyle: React.CSSProperties = {
    paddingTop: "1vh",
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
          <Typography component="h1" variant="h4">
            {headingText}
          </Typography>
        </Grid>
      </Grid>
      {children && (
        <Grid>
          <MyDivider />
          <Grid item sm={8}>
            <Box my={2}>{children}</Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}
