import { MySection } from "../../commonV2";

type PropTypes = {
  color: string;
};

const MyPathSection = ({ color }: PropTypes) => {
  return (
    <MySection color={color} headingText="My Path">
      Hello World
    </MySection>
  );
};

export default MyPathSection;
