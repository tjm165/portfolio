import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type PropTypes = {
  children: ReactElement;
  to: string;
};

const UndecoratedLink = ({ children, to }: PropTypes) => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Link to={to} style={linkStyle}>
      {children}
    </Link>
  );
};

export default UndecoratedLink;
