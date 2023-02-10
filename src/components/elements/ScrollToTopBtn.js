import "./ScrollToTopBtn.scss";
import ScrollToTopIcon from "../../assets/icon/ScrollToTopIcon.svg";

/*
  Parameters:
    theme: number 
    themeName: number
*/
function ScrollToTopBtn({ theme, themeName }) {
  function scrollToTop() {
    // Declare element we want to scroll to by id
    let element = document.getElementById(`${themeName}__section-1`);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    /* Declare css class by parameter "theme", and declare the page where we want to scroll to by parameter "themeName" */
    <div className={"scroll-to-top-btn__theme-" + theme} onClick={scrollToTop}>
      <span>重新選擇</span>
      <img src={ScrollToTopIcon} alt="scrollToTopBtn" />
    </div>
  );
}

export default ScrollToTopBtn;
