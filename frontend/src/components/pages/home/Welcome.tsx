import PropTypes from "prop-types";
import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

type PropTypes = {
  mobile: boolean;
};

const HomepageHeading = ({ mobile }: PropTypes) => (
  <Grid container stackable verticalAlign="middle">
    <Grid.Row>
      <Grid.Column floated="right" width={8}>
        <Header
          as="h1"
          content="Hi, I'm Thomas Moawad"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em",
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
        <Button primary color="linkedin" size="huge">
          <Icon name="linkedin" /> Connect on LinkedIn
        </Button>
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src={require("../../../moawad.jpg")} circular />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomepageHeading;
