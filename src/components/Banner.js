import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import banner1 from '../assets/bollywood.jpg';
import banner2 from '../assets/cinema.jpg';
import banner3 from '../assets/movie.jpg';
import banner4 from '../assets/movieTime.jpg';

// Banner image array (outside component for optimization)
const banners = [banner1, banner2, banner3, banner4];

// Slider settings (also moved outside component)
const sliderSettings = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    infinite: true,
    speed: 100,
    centerPadding: "300px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

export default function Banner() {
    return (
        <div className="my-1 overflow-x-auto">
            <Slider {...sliderSettings} className="py-2">
                {banners.map((image, index) => (
                    <div className="px-2" key={index}>
                        <img
                            src={image}
                            alt={`banner-${index + 1}`}
                            className="w-full rounded h-52 sm:h-60 md:h-72 lg:h-96 object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
