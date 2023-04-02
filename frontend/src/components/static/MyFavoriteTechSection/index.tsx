import { MySection } from "../../commonV2";
import data from "../favoriteTech/data";
import TechCard from "./TechCard";

type PropTypes = {
  color: string;
};

const MyFavoriteTechSection = ({ color }: PropTypes) => {
  return (
    <MySection color={color} headingText="My Favorite Tech">
      {data.map((datam) => (
        <TechCard {...datam} />
      ))}
    </MySection>
  );
};

export default MyFavoriteTechSection;
