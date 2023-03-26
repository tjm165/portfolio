import { Grid, Header, Segment } from "semantic-ui-react";

const MyFavoriteTechSection = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              My Favorite Tech
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default MyFavoriteTechSection;
