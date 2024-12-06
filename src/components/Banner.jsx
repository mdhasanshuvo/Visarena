import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import family from '../assets/family.jpg';
import study from '../assets/student-visa.png';
import tourist from '../assets/tourist.jpeg';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const slides = [
        {
            title: 'Simplify Your Travel Process',
            subtext: 'With Visarena, applying for visas has never been easier.',
            img: tourist,
        },
        {
            title: 'Your Gateway to the World',
            subtext: 'Check visa requirements and track your applications seamlessly.',
            img: study,
        },
        {
            title: 'Plan, Apply, Travel Hassle-Free',
            subtext: 'Visarena makes your travel dreams come true.',
            img: family,
        },
    ];

    return (
        <div className="relative w-full">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-[500px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-start bg-black/40 px-8 md:px-16">
                            <div className="max-w-md text-left space-y-4">
                                <h1 className="text-3xl md:text-5xl font-bold text-white">
                                    {slide.title}
                                </h1>
                                <p className="text-sm md:text-lg text-white">
                                    {slide.subtext}
                                </p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
