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

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((datam) => (
          <TechBubble {...datam} />
        ))}
      </div>
    </>
  );
};

export default MyFavoriteTechBubbles;
