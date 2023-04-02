import { Children, cloneElement, ReactNode, useEffect } from "react";
import { useTitle } from "../../hooks";
import { MyLandingContainer } from "../common";
import { useTheme } from "@mui/material/styles";

type PropTypes = {
  headingText?: string;
  subHeadingText?: string;
  children?: ReactNode;
};

export default function Page({
  headingText,
  subHeadingText,
  children,
}: PropTypes) {
  useTitle(headingText);
  const theme = useTheme();
  const colors = [theme.extraPalette.white, theme.palette.primary.light];

  document.body.style.backgroundColor =
    colors[(Children.count(children) - 1) % colors.length];

  const shouldShowHeading = headingText || subHeadingText;
  return (
    <>
      {shouldShowHeading && (
        <MyLandingContainer
          color={colors[0]}
          autoHeight
          headingText={headingText}
          subHeadingText={subHeadingText}
          unsafeIsPageHeader
        />
      )}
      {Children.map(children, (child: any, index) => {
        return cloneElement(child, { color: colors[index % colors.length] });
      })}
    </>
  );
}
