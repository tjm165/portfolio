import TechCardPropTypes from "./type";
import { Card, Image, Popup } from "semantic-ui-react";
// @ts-ignore
import LazyImage from "react-lazy-blur-image";

const TechBubble = ({ icon, name, description }: TechCardPropTypes) => {
  return (
    <Popup
      position="left center"
      hoverable
      trigger={
        <LazyImage
          uri={icon}
          // @ts-ignore
          render={(src) => (
            <Image
              src={src}
              style={{ marginTop: "6px", borderRadius: "5px" }}
              spaced
              size={"tiny"}
            />
          )}
        />
      }
    >
      <Popup.Header>{name}</Popup.Header>
      <Popup.Content>{description}</Popup.Content>
    </Popup>
  );
};

export default TechBubble;
