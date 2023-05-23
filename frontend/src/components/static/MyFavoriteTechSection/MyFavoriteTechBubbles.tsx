import { Card, Divider, Header } from "semantic-ui-react";
import { MySection, Types } from "../../common";
import data from "./data";
import TechBubble from "./TechBubble";

const MyFavoriteTechBubbles = () => {
  return (
    <>
      <Header
        as="h2"
        content="My Favorite Tech"
        inverted
        style={{
          fontWeight: "normal",
        }}
      />
      <Divider />
      <Card.Group centered>
        {data.map((datam) => (
          <TechBubble {...datam} />
        ))}
      </Card.Group>
    </>
  );
};

export default MyFavoriteTechBubbles;
