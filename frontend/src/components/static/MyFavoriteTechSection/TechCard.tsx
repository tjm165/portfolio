import TechCardPropTypes from "./type";
import { Card, Image, Dimmer, Segment } from "semantic-ui-react";
import { useState } from "react";

const TechCard = ({ icon, name, description }: TechCardPropTypes) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={icon}
        wrapped
        ui={false}
        fluid
        dimmer={{
          active: hovered,
          blurring: true,
          content: <>{description}</>,
        }}
      />

      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default TechCard;
