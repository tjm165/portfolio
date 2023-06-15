import TechCardPropTypes from "./type";
import { Image, Popup } from "semantic-ui-react";
// @ts-ignore

import LazyImage from "react-lazy-blur-image";

const TechBubble = ({ icon, name, description }: TechCardPropTypes) => {
  return (
    <LazyImage
      uri={icon}
      // @ts-ignore
      render={(src) => (
        <Popup
          position="left center"
          hoverable
          trigger={
            <Image
              src={src}
              style={{ marginTop: "6px", borderRadius: "5px" }}
              spaced
              size={"tiny"}
            />
          }
        >
          <Popup.Header>{name}</Popup.Header>
          <Popup.Content>{description}</Popup.Content>
        </Popup>
      )}
    />
  );
};

export default TechBubble;
