import TechCardPropTypes from "./type";
import { Card, Icon, Image } from "semantic-ui-react";

const TechCard = ({ icon, fullName }: TechCardPropTypes) => {
  return (
    <Card>
      <Image src={icon} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{fullName}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default TechCard;
