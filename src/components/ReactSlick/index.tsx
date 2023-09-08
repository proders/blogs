import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ReactSlick() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplaySpeed:2000,
        arrows:true,
        autoplay:true,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src='img/banner/img_1.jpg'  alt="" width="100%" height="100%"/>
            </div>
            <div>
                <img src='img/banner/img_5.jpg'  alt="" width="100%" height="100%"/>
            </div>
            <div>
                <img src='img/banner/img_3.jpg'  alt="" width="100%" height="100%"/>
            </div>
            <div>
                <img src='img/banner/img_4.jpg'  alt="" width="100%" height="100%"/>
            </div>

        </Slider>
    );
}