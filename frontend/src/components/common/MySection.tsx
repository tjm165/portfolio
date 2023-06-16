import { ReactNode } from "react";
import { Header, Segment, Container } from "semantic-ui-react";
import { Position } from "./types";

type PropTypes = {
  color: string;
  children: ReactNode;
  headingText: string;
  headingTextCenter?: Position;
  fluid?: boolean;
};

const MySection = ({
  color,
  children,
  headingText,
  headingTextCenter,
  fluid,
}: PropTypes) => {
  return (
    <Segment
      basic
      style={{ backgroundColor: color, padding: "4em 4em" }}
      vertical
    >
      <Container fluid={fluid}>
        <Header
          textAlign={headingTextCenter}
          style={{ fontSize: "2em", padding: "0em 0em 0em 0em" }}
        >
          {headingText}
        </Header>
        {children}
      </Container>
    </Segment>
  );
};

export default MySection;
