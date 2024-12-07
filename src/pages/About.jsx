import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/all.png';

const About = () => {
    return (
        <section className="py-40 bg-gradient-to-b from-base-200 to-base-100 text-base-content">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                {/* Left Column: Image and Text */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        Unknown Wanderlust <br /> Your Journey into
                    </h2>
                    <p className="text-sm md:text-lg mb-6 text-gray-600">
                        Visarena is here to help you navigate your travel dreams effortlessly. We simplify visa applications and
                        make the journey smoother from start to finish. From safety tips to passport assistance, we’ve got you covered.
                    </p>
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center text-gray-600">
                            <span className="mr-2 text-green-500">✔</span>
                            <span>Safety Guides</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span className="mr-2 text-green-500">✔</span>
                            <span>Passport Assistance</span>
                        </div>
                    </div>
                    <Link to="/services" className="btn btn-accent text-white mt-6">
                        Read More
                    </Link>
                </div>

                {/* Right Column: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={aboutImage}
                        alt="About Visarena"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
