import { Grid, Header, Segment } from "semantic-ui-react";
import { MySection, MyHeadingType } from "../../commonV2";

const MyPathSection = () => {
  return (
    <MySection headingText="My Path" headingType={MyHeadingType.sub}>
      Hello World
    </MySection>
  );
};

export default MyPathSection;
