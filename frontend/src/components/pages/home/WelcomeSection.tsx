import { createMedia } from "@artsy/fresnel";

import { Button, Divider, Grid, Header, Icon, Image } from "semantic-ui-react";
import { UndecoratedAnchor } from "../../common";
import MyFavoriteTechBubbles from "../../static/MyFavoriteTechSection/MyFavoriteTechBubbles";
import ScrollArrow from "./ScrollArrow";
// @ts-ignore
import LazyImage from "react-lazy-blur-image";

const mobile = true; // TOMMY SUPPORT BIG TIME

// Tommy put this into my theme
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const WelcomeSection = () => {
  return (
    <MediaContextProvider>
      <div style={{ minHeight: "90vh" }}>
        <Grid
          style={{ minHeight: 700, padding: "1em 0em" }}
          container
          stackable
          verticalAlign="middle"
        >
          <Grid.Row>
            <Grid.Column
              floated="right"
              width={7}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Header
                as="h1"
                content="Hi, I'm Thomas Moawad"
                inverted
                style={{
                  fontSize: mobile ? "2em" : "4em",
                  fontWeight: "normal",
                }}
              />
              <Header
                as="h2"
                content="I'm a full stack software engineer. I love serverless, cloud, and scalability.
      I am frequently recognized for bridging the gap between techical and business concepts."
                inverted
                style={{
                  fontSize: mobile ? "1.5em" : "1.7em",
                  fontWeight: "normal",
                  marginTop: mobile ? "0.5em" : "1.5em",
                }}
              />
              <UndecoratedAnchor
                href="https://www.linkedin.com/in/thomasmoawad/"
                target="_blank"
              >
                <Button primary color="linkedin" size="huge">
                  <Icon name="linkedin" /> Connect on LinkedIn
                </Button>
              </UndecoratedAnchor>
              <Divider />
              <Media at="mobile">
                <Grid.Column
                  width={8}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={require("../../../moawad.png")} circular />
                </Grid.Column>
              </Media>
              <MyFavoriteTechBubbles />
            </Grid.Column>
            <Grid.Column
              width={8}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Media greaterThan="mobile">
                <LazyImage
                  placeholder={require("../../../moawad-low-res.png")}
                  uri={require("../../../moawad.png")}
                  // @ts-ignore
                  render={(src) => <Image src={src} circular />}
                />{" "}
              </Media>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ScrollArrow />
      </div>
    </MediaContextProvider>
  );
};

export default WelcomeSection;
