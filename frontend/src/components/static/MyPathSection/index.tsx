import { MySection, Types } from "../../common";
import Timeline from "./Timeline";

type PropTypes = {
  color: string;
};

const MyPathSection = ({ color }: PropTypes) => {
  return (
    <MySection
      color={color}
      headingText="My Path"
      headingTextCenter={Types.Position.CENTER}
    >
      <Timeline />
    </MySection>
  );
};

export default MyPathSection;
