import { myPalette } from "../../../App/myTheme";
import { MySection, Types } from "../../common";
import { PageSectionPropTypes } from "../../pages/Page";
import Timeline from "./Timeline";

const MyPathSection = ({ color }: PageSectionPropTypes) => {
  return (
    <MySection
      color={myPalette.specific.offWhite}
      headingText="My Path"
      headingTextCenter={Types.Position.CENTER}
    >
      <Timeline />
    </MySection>
  );
};

export default MyPathSection;
