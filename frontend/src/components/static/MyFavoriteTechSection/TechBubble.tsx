import TechCardPropTypes from "./type";
import { Card, Image, Popup } from "semantic-ui-react";

const TechBubble = ({ icon, name, description }: TechCardPropTypes) => {
  return (
    <Popup trigger={<Image src={icon} spaced circular size={"tiny"} />}>
      <Popup.Header>{name}</Popup.Header>
      <Popup.Content>{description}</Popup.Content>
    </Popup>
  );
};

export default TechBubble;
