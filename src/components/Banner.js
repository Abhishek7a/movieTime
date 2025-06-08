import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../assets/bollywood.jpg';
import banner2 from '../assets/cinema.jpg';
import banner3 from '../assets/movie.jpg';
import banner4 from '../assets/movieTime.jpg';

export default function Banner() {
    var settings = {
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
            },

        ]
    };
    const banner = [
        banner1 ,
        banner2 ,
        banner3 ,
        banner4 
    ]
    return (
        <div className='my-1 overflow-x-auto'>
            <Slider {...settings} className='py-2'>
                {banner.map((image) => {
                    return (
                        <div className='px-2 ' key={image}>
                            <img className='w-full lg:h-96 rounded sm:h-60 h-52 md:h-72' src={`${image}`} alt="" />
                        </div>
                    )
                })
                }
            </Slider>
        </div>
    );
}

