import { Card } from "semantic-ui-react";
import { MySection, Types } from "../../common";
import data from "./data";
import TechBubble from "./TechBubble";

const MyFavoriteTechBubbles = () => {
  return (
    <>
      <h1>My Favorite Tech</h1>
      <Card.Group centered>
        {data.map((datam) => (
          <TechBubble {...datam} />
        ))}
      </Card.Group>
    </>
  );
};

export default MyFavoriteTechBubbles;
