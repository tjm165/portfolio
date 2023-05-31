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

  const wrapper = {
    position: "fixed",
    bottom: "10px",
    width: "100%",
  };

  const scrollArrowStyle = {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s",
    paddingBottom: "12px",
  };

  const arrowStyle = {
    width: "12px",
    height: "12px",
    borderBottom: "2px solid #fff",
    borderRight: "2px solid #fff",
    transform: "rotate(45deg)",
  };

  return (
    // @ts-ignore doesn't like fixed position
    <div style={wrapper}>
      <div style={scrollArrowStyle} onClick={scrollToBottom}>
        <span style={arrowStyle}></span>
      </div>
    </div>
  );
};

export default ScrollArrow;
