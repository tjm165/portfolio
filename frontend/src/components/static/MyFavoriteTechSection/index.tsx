import { MySection } from "../../commonV2";

type PropTypes = {
  color: string;
};

const MyFavoriteTechSection = ({ color }: PropTypes) => {
  return (
    <MySection color={color} headingText="My Favorite Tech">
      Hello World
    </MySection>
  );
};

export default MyFavoriteTechSection;
