import React from "react"
import ReactDOM from "react-dom"
import Slider from "react-slick"
import "./onboardingslides.scss"
import svg from "../../assets/Images/svg/index"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PrevArrow = ({ onClick }) => {
  return (
    <button className="prev" onClick={onClick} style={{ display: "" }}>
      <img src={svg.prevarrow} className="prev-img" />
    </button>
  )
}
export const NextArrow = ({ onClick }) => {
  return (
    <button className="next" onClick={onClick} style={{}}>
      <img src={svg.nextarrow} className="next-img" />
    </button>
  )
}

const OnboardingSlides = () => {
  const slidesData = [svg.logo, svg.artical, svg.hamburger, svg.artical]
  var settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  }
  return (
    <div className="onboarding-container">
      <Slider {...settings}>
        {slidesData?.map((item, index) => (
          <div key={index}>
            <div className="card1 slidecard">
            <div className="row col-md-12 col-sm-12 no-gutters zeropadding card-child">
              <img src={item} alt="item np" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default OnboardingSlides
