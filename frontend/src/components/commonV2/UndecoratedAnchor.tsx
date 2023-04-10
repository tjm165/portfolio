import { ReactElement } from "react";

type PropTypes = {
  children: ReactElement;
  href: string;
  [prop: string]: any;
};

const UndecoratedAnchor = ({ children, href, ...rest }: PropTypes) => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <a href={href} style={linkStyle} {...rest}>
      {children}
    </a>
  );
};

export default UndecoratedAnchor;
