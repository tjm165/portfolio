import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import { UndecoratedAnchor } from "../../common";

const FooterSection = () => {
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: "5em 0em",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contact" />
              <List link inverted>
                <List.Item as="a">
                  <UndecoratedAnchor
                    href="https://www.linkedin.com/in/thomasmoawad/"
                    target="_blank"
                  >
                    <>Connect on LinkedIn</>
                  </UndecoratedAnchor>
                </List.Item>
                {/* <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item> */}
              </List>
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default FooterSection;
