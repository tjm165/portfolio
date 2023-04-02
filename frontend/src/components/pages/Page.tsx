import { Children, cloneElement, ReactNode, useEffect } from "react";
import { useTitle } from "../../hooks";
import { MyLandingContainer } from "../common";
import { myPalette } from "../../App/myTheme";

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

  const colors = [myPalette.specific.white, myPalette.abstract.primary.light];

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
