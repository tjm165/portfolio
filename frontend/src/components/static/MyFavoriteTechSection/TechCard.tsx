import TechCardPropTypes from "./type";
import { Card, Image, Dimmer } from "semantic-ui-react";
import { useState } from "react";

import { myPalette } from "../../../App/myTheme";

const TechCard = ({ icon, name, description }: TechCardPropTypes) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Dimmer.Dimmable as={Image} blurring dimmed={hovered}>
        <Dimmer inverted active={hovered}>
          <h4 style={{ color: myPalette.specific.graphite }}>{description}</h4>
        </Dimmer>

        <Image src={icon} ui={false} />
      </Dimmer.Dimmable>

      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default TechCard;
