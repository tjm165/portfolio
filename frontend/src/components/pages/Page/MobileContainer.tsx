import { Component, ReactNode } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

type MobileContainerPropTypes = {
  children: ReactNode;
};

class MobileContainer extends Component {
  state = {} as { sidebarOpened: boolean };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props as MobileContainerPropTypes;
    const { sidebarOpened } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          {/* <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item> */}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default MobileContainer;
