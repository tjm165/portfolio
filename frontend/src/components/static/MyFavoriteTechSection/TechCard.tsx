import TechCardPropTypes from "./type";
import { Card, Icon, Image } from "semantic-ui-react";

const TechCard = ({ icon, name }: TechCardPropTypes) => {
  return (
    <Card>
      <Image
        // style={{ width: "50%", paddingBottom: "50%" }}
        src={icon}
        wrapped
        ui={false}
        fluid
      />

      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default TechCard;
