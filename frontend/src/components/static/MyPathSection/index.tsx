import { myPalette } from "../../../App/myTheme";
import { MySection, Types } from "../../common";
import { PageSectionPropTypes } from "../../pages/Page";
import Timeline from "./Timeline";

const MyPathSection = ({ color }: PageSectionPropTypes) => {
  return (
    <>
      <span
        id="top-of-my-path-section"
        style={{ display: "hidden", height: "0px", width: "0px" }}
      />

      <MySection
        color={myPalette.specific.offWhite}
        headingText="My Journey"
        headingTextCenter={Types.Position.CENTER}
      >
        <Timeline />
      </MySection>
    </>
  );
};

export default MyPathSection;
