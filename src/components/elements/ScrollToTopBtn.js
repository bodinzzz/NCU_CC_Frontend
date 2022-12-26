import "./ScrollToTopBtn.scss";
import ScrollToTopIcon from "../../assets/icon/ScrollToTopIcon.svg";

function ScrollToTopBtn({ theme }) {
  console.log(window.pageYOffset);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  console.log(window.pageYOffset);

  return (
    <div className={"scroll-to-top-btn__theme-" + theme} onClick={scrollToTop}>
      <div>重新選擇</div>
      <img src={ScrollToTopIcon} alt="scrollToTopBtn" />
    </div>
  );
}

export default ScrollToTopBtn;
