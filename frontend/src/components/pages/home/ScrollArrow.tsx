const ScrollArrow = () => {
  const scrollToBottom = () => {
    var element = document.getElementById("top-of-my-path-section");

    if (!element) {
      return;
    }

    window.scrollTo({
      top: element.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  const scrollArrowStyle = {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s",
  };

  const arrowStyle = {
    width: "12px",
    height: "12px",
    borderBottom: "2px solid #fff",
    borderRight: "2px solid #fff",
    transform: "rotate(45deg)",
  };

  return (
    <div style={scrollArrowStyle} onClick={scrollToBottom}>
      <span style={arrowStyle}></span>
    </div>
  );
};

export default ScrollArrow;
