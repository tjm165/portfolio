import { ReactNode } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { MyHeadingType } from "./index";

type PropTypes = {
  children: ReactNode;
  headingText: string;
  headingType: MyHeadingType;
};

const MySection = ({ children, headingText, headingType }: PropTypes) => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as={headingType} style={{ fontSize: "2em" }}>
              {headingText}
            </Header>
          </Grid.Column>
        </Grid.Row>
        {children}
      </Grid>
    </Segment>
  );
};

export default MySection;
