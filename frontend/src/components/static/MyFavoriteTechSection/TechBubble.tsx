import TechCardPropTypes from "./type";
import { Card, Image, Popup } from "semantic-ui-react";

const TechBubble = ({ icon, name, description }: TechCardPropTypes) => {
  return (
    <Popup
      position="left center"
      hoverable
      trigger={
        <Image
          src={icon}
          style={{ marginTop: "6px", borderRadius: "5px" }}
          spaced
          size={"tiny"}
        />
      }
    >
      <Popup.Header>{name}</Popup.Header>
      <Popup.Content>{description}</Popup.Content>
    </Popup>
  );
};

export default TechBubble;
