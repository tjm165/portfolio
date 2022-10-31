import { COLOR } from "../common";

type PropTypes = {
  backgroundColor: COLOR;
  backgroundColor2?: COLOR;
  children: JSX.Element;
};

const Slide = ({ backgroundColor, backgroundColor2, children }: PropTypes) => {
  const background = backgroundColor2
    ? {
        backgroundImage: `linear-gradient(to left, ${backgroundColor}, ${backgroundColor2})`,
      }
    : { backgroundColor: backgroundColor };

  return (
    <div className="slide" style={{ ...background, height: "100vh" }}>
      {children}
    </div>
  );
};

export default Slide;
