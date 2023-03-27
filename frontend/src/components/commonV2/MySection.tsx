import { ReactNode } from "react";
import { Header, Segment, Container } from "semantic-ui-react";

type PropTypes = {
  color: string;
  children: ReactNode;
  headingText: string;
};

const MySection = ({ color, children, headingText }: PropTypes) => {
  return (
    <Segment style={{ backgroundColor: color, padding: "8em 0em" }} vertical>
      <Container>
        <Header style={{ fontSize: "2em" }}>{headingText}</Header>
        {children}
      </Container>
    </Segment>
  );
};

export default MySection;
