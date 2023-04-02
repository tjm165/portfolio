import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

type PropTypes = {
  view: JSX.Element;
};

function App(props: PropTypes) {
  return <React.Fragment>{props.view}</React.Fragment>;
}

export default App;
