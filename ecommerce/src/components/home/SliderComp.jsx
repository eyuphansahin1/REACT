import React from 'react'
import Slider from "react-slick";
import SliderOne from '../../assets/slider1.jpg'
import SliderTwo from '../../assets/slider2.jpg'
import SliderThree from '../../assets/slider3.jpg'
function SliderComp() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <div>
        <Slider {...settings}>
      <div className="w-full">
        <img src={SliderOne} alt="" className="w-full" />
      </div>
      <div className="w-full">
        <img src={SliderTwo} alt="" className="w-full" />
      </div>
      <div className="w-full">
        <img src={SliderThree} alt="" className="w-full" />
      </div>
    </Slider>
    </div>
  )
}

export default SliderComp