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
    <Segment style={{ backgroundColor: color, padding: "8em 0em" }} vertical>
      <Container>
        <Header textAlign={headingTextCenter} style={{ fontSize: "2em" }}>
          {headingText}
        </Header>
        {children}
      </Container>
    </Segment>
  );
};

export default MySection;
