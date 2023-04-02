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
      <Dimmer.Dimmable as={Image} blurring dimmed={hovered}>
        <Dimmer active={hovered}>
          <h4>{description}</h4>
        </Dimmer>

        <Image
          src={icon}
          //   wrapped
          ui={false}
          //   fluid
          // dimmer={{
          //   active: hovered,
          //   blurring: true,
          //   content: <>{description}</>,
          // }}
        />
      </Dimmer.Dimmable>

      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default TechCard;
