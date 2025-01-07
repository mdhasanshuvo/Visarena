import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImage from '../assets/all.png';
import visaAbout from '../assets/visa-about.jpg';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Helmet>
                <title>About Us | Visarena</title>
            </Helmet>

            <header>
                <Navbar></Navbar>
            </header>

            <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-12">

                {/* Hero Section */}
                <section className="text-center mb-12 sm:mb-28">
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                        Welcome to Visarena
                    </h1>
                    <img
                        src={aboutImage}
                        alt="Travel and Visa Process"
                        className="w-full max-h-[500px] object-cover rounded-xl "
                    />
                </section>

                {/* Our Mission Section */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-12 sm:mb-32">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Mission</h2>
                    <div className="flex flex-col md:flex-row items-center space-x-6">
                        <img
                            src={visaAbout}
                            alt="Visa Assistance"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left mt-6 md:mt-0">
                            At Visarena, our mission is to simplify the visa application process by providing a
                            user-friendly platform that makes international travel accessible and hassle-free.
                            Whether you're planning your first trip abroad or managing multiple visa applications,
                            Visarena is your trusted partner every step of the way.
                        </p>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="mb-12 sm:mb-28">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
                            <div className="mb-4">
                                <i className="fas fa-globe text-4xl text-blue-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Accessibility</h3>
                            <p className="text-gray-600">Providing tools to make visa services accessible to everyone, everywhere.</p>
                        </div>

                        <div className="text-center bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
                            <div className="mb-4">
                                <i className="fas fa-hand-holding-heart text-4xl text-green-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Reliability</h3>
                            <p className="text-gray-600">Delivering accurate, up-to-date visa information and application tracking.</p>
                        </div>

                        <div className="text-center bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
                            <div className="mb-4">
                                <i className="fas fa-paper-plane text-4xl text-yellow-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Innovation</h3>
                            <p className="text-gray-600">Creating advanced tools for a seamless, paperless visa experience.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 rounded-lg shadow-lg p-8 mb-12 sm:mb-28">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Why Choose Visarena?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                        From start to finish, Visarena provides an efficient and transparent visa application experience.
                        Here’s what sets us apart:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">User-Friendly Platform</h3>
                            <p className="text-gray-600">Navigate easily with our intuitive and responsive interface.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Real-Time Tracking</h3>
                            <p className="text-gray-600">Monitor your visa application's progress in real-time.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dedicated Support</h3>
                            <p className="text-gray-600">Our support team is available to assist you at every step.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Have Questions? Let’s Connect!
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Whether you’re a traveler or a business looking to simplify visa management, we’re here to help.
                    </p>
                    <a
                        href="mailto:support@visarena.com"
                        className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
                    >
                        Contact Us
                    </a>
                </section>
            </div>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default AboutUs;
