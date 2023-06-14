import { Component, ReactNode } from "react";
import { InView } from "react-intersection-observer";
import { Container, Menu, Segment } from "semantic-ui-react";
import { NavItems } from "../../..";
import PropTypes from "prop-types";

type DesktopContainerPropTypes = {
  children: ReactNode;
  transparent?: boolean;
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
// TODO convert to function
class DesktopContainer extends Component {
  state = {} as { fixed: boolean };

  toggleFixedMenu = (inView: boolean) => this.setState({ fixed: !inView });

  render() {
    const { children, transparent } = this.props as DesktopContainerPropTypes;
    const { fixed } = this.state;

    return (
      <>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            textAlign="center"
            vertical
            className={transparent ? "FancyHeader" : ""}
            style={{
              minHeight: "8vh",
              maxHeight: "8vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Menu
              fixed={fixed ? "top" : undefined}
              pointing={!fixed}
              secondary={!fixed}
            >
              <Container>
                <NavItems />
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
