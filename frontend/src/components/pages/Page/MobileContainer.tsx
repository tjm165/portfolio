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
            vertical
          >
            <Container>
              <Grid
                columns={2}

                // textAlign="center"
              >
                <Grid.Column style={{ float: "left" }}>
                  <Menu pointing secondary>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name="sidebar" />
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
                {/* <Grid.Column textAlign="center" width={16}>
                  <Header
                    onClick={() => {
                      window.location.href = window.location.origin;
                    }}
                  >
                    Thomas Moawad
                  </Header>
                </Grid.Column> */}
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
