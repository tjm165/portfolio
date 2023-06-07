import { Component, ReactNode } from "react";
import { InView } from "react-intersection-observer";
import { Container, Menu, Segment } from "semantic-ui-react";

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
      <>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign="center"
            vertical
            style={{
              minHeight: "10vh",
              maxHeight: "10vh",
              display: "flex",
              flexDirection: "column",
            }}
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
                {/* <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item> */}
              </Container>
            </Menu>
          </Segment>
        </InView>

        {children}
      </>
    );
  }
}

export default DesktopContainer;
