import "./ScrollPageNav.scss";
import CareerHomeImg from "../../assets/image/ScrollNav/CareerHomeImg.svg";
import CareerInfoImg from "../../assets/image/ScrollNav/CareerInfoImg.svg";
import GenderImg from "../../assets/image/ScrollNav/GenderImg.svg";
import SalaryImg from "../../assets/image/ScrollNav/SalaryImg.svg";
import LocationImg from "../../assets/image/ScrollNav/LocationImg.svg";

function ScrollPageNav({ nowPage }) {
  function scrollToTop(id) {
    console.log(0);
    const element = document.getElementById(`career__section-${id}`);
    element.scrollIntoView({ behavior: "smooth" });
  }

  const elements = [
    {
      img: CareerHomeImg,
      sectionNum: 1,
    },
    {
      img: CareerInfoImg,
      sectionNum: 2,
    },
    {
      img: GenderImg,
      sectionNum: 3,
    },
    {
      img: SalaryImg,
      sectionNum: 4,
    },
    {
      img: LocationImg,
      sectionNum: 5,
    },
  ];

  return (
    <div className="scroll-page-nav">
      {elements.map((element, index) => {
        return (
          <div
            onClick={() => {
              scrollToTop(element.sectionNum);
            }}
            key={index}
            className="scroll-page-nav__menu"
          >
            <div className="scroll-page-nav__menu__link">
              <img src={element.img} />
            </div>
          </div>
        );
      })}
      <div>{nowPage}</div>
    </div>
  );
}
export default ScrollPageNav;
