import "./ScrollToTopBtn.scss";
import ScrollToTopIcon from "../../assets/icon/ScrollToTopIcon.svg";

function ScrollToTopBtn({ theme, themeName }) {
  function scrollToTop() {
    var element = document.getElementById(`${themeName}__section-1`);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={"scroll-to-top-btn__theme-" + theme} onClick={scrollToTop}>
      <div>重新選擇</div>
      <img src={ScrollToTopIcon} alt="scrollToTopBtn" />
    </div>
  );
}

export default ScrollToTopBtn;
