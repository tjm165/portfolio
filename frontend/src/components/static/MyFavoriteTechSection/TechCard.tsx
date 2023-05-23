import TechCardPropTypes from "./type";
import { Card, Image, Dimmer, Popup } from "semantic-ui-react";
import { useState } from "react";

import { myPalette } from "../../../App/myTheme";

const TechCard = ({ icon, name, description }: TechCardPropTypes) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Popup
      trigger={
        <Card
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image src={icon} ui={false} />

          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
        </Card>
      }
    >
      <Popup.Header>{name}</Popup.Header>
      <Popup.Content>{description}</Popup.Content>
    </Popup>
  );
};

export default TechCard;
