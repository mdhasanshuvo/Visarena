import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import family from '../assets/family.jpg'
// import study from '../assets/student-visa.png'
// import tourist from '../assets/tourist.jpeg'
// import all from '../assets/all.png'

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
            title: 'Discover the World with Ease',
            subtext: 'Check visa requirements and apply online seamlessly.',
            img: family,
        },
        {
            title: 'Simplify Your Visa Journey',
            subtext: 'Track your applications anytime, anywhere.',
            img: family,
        },
        {
            title: 'Plan, Apply, Travel',
            subtext: 'Visarena makes it all possible.',
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
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center p-8 space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-white">{slide.title}</h1>
                            <p className="text-lg md:text-2xl text-white">{slide.subtext}</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;