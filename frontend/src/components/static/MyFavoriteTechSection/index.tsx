import { MySection, Types } from "../../common";
import data from "./data";
import TechCard from "./TechCard";
import { Card } from "semantic-ui-react";

type PropTypes = {
  color: string;
};

const MyFavoriteTechSection = ({ color }: PropTypes) => {
  return (
    <MySection
      color={color}
      headingText="My Favorite Tech"
      headingTextCenter={Types.Position.CENTER}
    >
      <Card.Group centered>
        {data.map((datam) => (
          <TechCard {...datam} />
        ))}
      </Card.Group>
    </MySection>
  );
};

export default MyFavoriteTechSection;
