import { Typography, Container, Grid, Box, Hidden } from "@mui/material";
import { useTitle } from "../../hooks";
import { MyDivider, MyLandingContainer } from "../common";
import { Align } from "../common/section"; // todo put this in common

type PropTypes = {
  headingText: string;
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
  useTitle(headingText);
  return (
    <>
      <MyLandingContainer
        headingText="helloWorld"
        subHeadingText="HelloWorld"
      />
      {children}
    </>
  );
}
