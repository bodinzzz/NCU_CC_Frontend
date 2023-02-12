import "./ScrollToTopBtn.scss";
import ScrollToTopIcon from "../../assets/icon/ScrollToTopIcon.svg";

/*
  Parameters:
    theme: number 
    themeName: number
*/
function ScrollToTopBtn({ theme, topRef }) {
  const scrollToTop = () => {
    topRef.current.scrollIntoView();
  };

  return (
    <div className={"scroll-to-top-btn__theme-" + theme} onClick={scrollToTop}>
      <span>重新選擇</span>
      <img src={ScrollToTopIcon} alt="scrollToTopBtn" />
    </div>
  );
}

export default ScrollToTopBtn;
