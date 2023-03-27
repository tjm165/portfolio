import { MySection } from "../../commonV2";
import Timeline from "./Timeline";

type PropTypes = {
  color: string;
};

const MyPathSection = ({ color }: PropTypes) => {
  return (
    <MySection color={color} headingText="My Path">
      <Timeline />
    </MySection>
  );
};

export default MyPathSection;
