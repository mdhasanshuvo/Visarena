import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import family from '../assets/family.jpg';
import tourist from '../assets/---tourist.jpeg';
import study from '../assets/student-visa.jpg';
import { Link } from 'react-router-dom';

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
            title: 'Journey with Confidence',
            subtext: 'Start your migration journey today with Visarena. Our easy and secure process makes visa applications simple.',
            img: tourist,
        },
        {
            title: 'Travel Together, Travel Smarter',
            subtext: 'Applying for family visas is effortless with Visarena. Let us help you travel and reunite with your loved ones.',
            img: family,
        },
        {
            title: 'Explore New Opportunities Abroad',
            subtext: 'Whether you are planning to study or work, Visarena has you covered with visa services that make your dreams a reality.',
            img: study,
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
                            className="w-full h-[65vh] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8 text-center space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-white">{slide.title}</h1>
                            <p className="text-lg md:text-2xl text-white">{slide.subtext}</p>
                            <Link to='/allvisa' className="btn btn-accent text-white py-2 px-6 rounded-full">
                                Get Started
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
