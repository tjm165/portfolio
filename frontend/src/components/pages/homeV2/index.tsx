import { createMedia } from "@artsy/fresnel";
import { Component, ReactNode } from "react";
import { InView } from "react-intersection-observer";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import HomepageHeading from "./Welcome";
import { MyFavoriteTechSection, MyPathSection } from "../../static";
import { myPalette } from "../../../App/myTheme";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

type DesktopContainerPropTypes = {
  children: ReactNode;
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {} as { fixed: boolean };

  toggleFixedMenu = (inView: boolean) => this.setState({ fixed: !inView });

  render() {
    const { children } = this.props as DesktopContainerPropTypes;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading mobile={false} />
          </Segment>
        </InView>

        {children}
      </Media>
    );
  }
}

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
      <Media at="mobile">
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
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
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
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

type ResponsiveContainerPropTypes = {
  children: ReactNode;
};

const ResponsiveContainer = ({ children }: ResponsiveContainerPropTypes) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

const FooterSection = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

// Tommy this is basically a Page
const HomepageLayout = () => {
  const Elements = [MyFavoriteTechSection, MyPathSection];
  const colors = [myPalette.specific.white, myPalette.abstract.primary.light];

  return (
    <ResponsiveContainer>
      {Elements.map((Element, index) => (
        <Element color={colors[index % colors.length]} />
      ))}
      <FooterSection />
    </ResponsiveContainer>
  );
};

export default HomepageLayout;
