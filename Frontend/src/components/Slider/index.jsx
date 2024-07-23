import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

function HomeSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="sliderImage">
        <Slider {...settings}>
          <div className="slider1">
            <img
              src="https://demo.templatesjungle.com/techlight/images/slider-img1.jpg"
              alt=""
            />
            <div className="text">
              <h1>The Most Powerful Small Sized Robots In The World</h1>
              <p>
                How did the hand pies look? Did you love the brownies? How many
                choux did you eat in one sitting? After a gorgeous selection of
                our favorites for a client to send as a new year’s gift.
              </p>
            </div>
          </div>
          <div className="slider2">
            <img
              src="https://demo.templatesjungle.com/techlight/images/slider-img2.jpg"
              alt=""
            />
            <div className="text">
              <h1>The Most Powerful Small Sized Robots In The World</h1>
              <p>
                How did the hand pies look? Did you love the brownies? How many
                choux did you eat in one sitting? After a gorgeous selection of
                our favorites for a client to send as a new year’s gift.
              </p>
            </div>
          </div>
          <div className="slider2">
            <img
              src="https://demo.templatesjungle.com/techlight/images/slider-img3.jpg"
              alt=""
            />
            <div className="text">
              <h1>The Most Powerful Small Sized Robots In The World</h1>
              <p>
                How did the hand pies look? Did you love the brownies? How many
                choux did you eat in one sitting? After a gorgeous selection of
                our favorites for a client to send as a new year’s gift.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomeSlider;
