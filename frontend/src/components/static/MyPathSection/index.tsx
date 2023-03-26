import { Grid, Header, Segment } from "semantic-ui-react";

const MyPathSection = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              My Path
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default MyPathSection;
