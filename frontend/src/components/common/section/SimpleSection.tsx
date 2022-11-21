import { Typography, Container, Grid, Box, Hidden } from "@mui/material";
import MyDivider from "./MyDivider";

type PropTypes = {
  headingText: string;
  subHeadingText?: string;
  children?: JSX.Element;
};

export default function SimpleSection({
  headingText,
  subHeadingText,
  children,
}: PropTypes) {
  const gridContainerStyle: React.CSSProperties = {
    paddingTop: "10vh",
  };

  return (
    <>
      <Grid
        style={gridContainerStyle}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item sm={8}>
          <Typography component="h1" variant="h3">
            {headingText}
          </Typography>

          {subHeadingText && (
            <Typography variant="h5">{subHeadingText}</Typography>
          )}
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
