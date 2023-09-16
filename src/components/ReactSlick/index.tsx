import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ReactSlick() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "160px",
        infinite: true,  //无线环绕内容
        slidesToShow: 3, //一帧中显示多少张
        slidesToScroll: 3,
        // dots:true, //点
        arrows:true,
        speed: 500, //速度
        autoplaySpeed: 2000,
        autoplay:true, //自动轮播
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