import { ReactNode } from "react";
import { Header, Segment, Container } from "semantic-ui-react";
import { Position } from "./types";

type PropTypes = {
  color: string;
  children: ReactNode;
  headingText: string;
  headingTextCenter?: Position;
};

const MySection = ({
  color,
  children,
  headingText,
  headingTextCenter,
}: PropTypes) => {
  return (
    <Segment style={{ backgroundColor: color, padding: "4em 4em" }} vertical>
      <Container>
        <Header
          textAlign={headingTextCenter}
          style={{ fontSize: "2em", padding: "0em 0em 1em 0em" }}
        >
          {headingText}
        </Header>
        {children}
      </Container>
    </Segment>
  );
};

export default MySection;
