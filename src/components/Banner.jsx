import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import family from '../assets/family.jpg';
import study from '../assets/student-visa.jpg';
import tourist from '../assets/tourist.jpeg';
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
            title: 'Explore the World with Ease',
            subtext: 'Apply for tourist visas effortlessly and start your next adventure with Visarena.',
            img: tourist,
        },
        {
            title: 'Study Abroad Made Simple',
            subtext: 'Get the right student visa quickly and easily with Visarena’s streamlined process.',
            img: study,
        },
        {
            title: 'Family Travel, Simplified',
            subtext: 'Apply for family visas and make your vacations unforgettable with Visarena’s hassle-free services.',
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
                            className="w-full h-[60vh] object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-start bg-black/40 px-8 md:px-16">
                            <div className="mx-auto space-y-4 container text-center">
                                <h1 className="text-3xl md:text-5xl font-bold text-white">
                                    {slide.title}
                                </h1>
                                <p className="text-sm md:text-lg text-white">
                                    {slide.subtext}
                                </p>
                                <Link to='/allVisa' className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
