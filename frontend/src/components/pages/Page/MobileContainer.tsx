import { Component, ReactNode } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { NavItems } from "../../..";

type MobileContainerPropTypes = {
  children: ReactNode;
  headerColor: string;
  transparent?: boolean;
};

class MobileContainer extends Component {
  state = {} as { sidebarOpened: boolean };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children, transparent } = this.props as MobileContainerPropTypes;
    const { sidebarOpened } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <NavItems />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            className={transparent ? "FancyHeader" : "BorderlessHeader"}
            // textAlign="center"
          >
            <Container>
              <Grid columns={3}>
                <Grid.Column style={{ float: "left" }} width={2}>
                  <Menu pointing secondary>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name="sidebar" />
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
                <Grid.Column
                  textAlign="center"
                  width={12}
                  style={{
                    display: "flex",
                    alignItems: "center" /* Vertically center items */,
                    justifyContent: "center" /* Horizontally center items */,
                  }}
                >
                  <Header
                    as="h2"
                    onClick={() => {
                      window.location.href = window.location.origin;
                    }}
                  >
                    Thomas Moawad
                  </Header>
                </Grid.Column>
                <Grid.Column style={{ float: "right" }} width={2}></Grid.Column>
              </Grid>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default MobileContainer;
