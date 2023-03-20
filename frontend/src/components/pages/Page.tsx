import { Children, cloneElement, ReactNode } from "react";
import { useTitle } from "../../hooks";
import { MyLandingContainer } from "../common";
import { Align } from "../common/section"; // todo put this in common
import { useTheme } from "@mui/material/styles";

type PropTypes = {
  headingText: string;
  subHeadingText?: string;
  alignHeading?: Align;
  children?: ReactNode[];
};

export default function Page({
  headingText,
  subHeadingText,
  alignHeading = Align.LEFT,
  children,
}: PropTypes) {
  useTitle(headingText);
  const theme = useTheme();

  const colors = [theme.extraPalette.white, theme.palette.primary.main];

  return (
    <>
      <MyLandingContainer
        color={colors[0]}
        autoHeight
        headingText={headingText}
        subHeadingText={subHeadingText}
        alignHeading={alignHeading}
      />
      {Children.map(children, (child: any, index) => {
        return cloneElement(child, { color: colors[index % colors.length] });
      })}
    </>
  );
}
