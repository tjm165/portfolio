const Link = ({ href, text, leftSpace = true, rightSpace = true }: any) => {
  return (
    <>
      {leftSpace && " "}
      <a href={href} target="_blank">
        {text}
      </a>
      {rightSpace && " "}
    </>
  );
};

export default Link;
