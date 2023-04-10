import { Button, Grid, Header, Icon, Image } from "semantic-ui-react";
import { UndecoratedAnchor } from "../../common";
import { PageSectionPropTypes } from "../Page";

const mobile = true; // TOMMY SUPPORT BIG TIME

const WelcomeSection = () => {
  const divStyle = {
    backgroundImage: "linear-gradient(to bottom right, #70CFFF, #5C08AF)",
  };

  return (
    <div style={divStyle}>
      <Grid
        style={{ minHeight: 700, padding: "1em 0em" }}
        container
        stackable
        verticalAlign="middle"
      >
        <Grid.Row>
          <Grid.Column
            floated="right"
            width={8}
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
          </Grid.Column>
          <Grid.Column
            width={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={require("../../../moawad.jpg")} circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default WelcomeSection;
