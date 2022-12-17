import "./ScrollSection.scss";

// secondary container in home page
function ScrollSection(props, { backgroundColor }) {
  return <div className="section">{props.children}</div>;
}

export default ScrollSection;
