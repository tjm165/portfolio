import { ReactNode } from "react";
import { useTitle } from "../../hooks";
import { MyLandingContainer } from "../common";
import { Align } from "../common/section"; // todo put this in common

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
  return (
    <>
      <MyLandingContainer
        autoHeight
        headingText={headingText}
        subHeadingText={subHeadingText}
        alignHeading={alignHeading}
      />
      {children}
    </>
  );
}
