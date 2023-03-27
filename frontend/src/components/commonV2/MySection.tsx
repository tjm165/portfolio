import { ReactNode } from "react";
import { Header, Segment, Container } from "semantic-ui-react";

type PropTypes = {
  children: ReactNode;
  headingText: string;
};

const MySection = ({ children, headingText }: PropTypes) => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header style={{ fontSize: "2em" }}>{headingText}</Header>
        {children}
      </Container>
    </Segment>
  );
};

export default MySection;
