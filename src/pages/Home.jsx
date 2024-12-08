import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LatestVisas from '../components/LatestVisas';
import Footer from '../components/Footer';
import About from './About';
import Success from '../components/Success';
import TestimonialSection from '../components/Testimonial';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1733676453370.json';

const Home = () => {
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className=''>
            <Helmet>
                <title>Home | Visarena</title>
            </Helmet>
            {/* header section */}
            <header>
                {
                    user && (
                        <h1
                            className="text-center text-lg sm:text-2xl font-bold text-primary"
                            style={{
                                transition: 'color 0.3s ease',
                            }}
                        >
                            <Typewriter
                                words={[
                                    `Hello, ${user.displayName}!!!`,
                                    'Welcome to Visarena.',
                                    'Explore visa options today!',
                                ]}
                                loop={0} // Only types each message once
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h1>
                    )
                }
                <Navbar></Navbar>

                <Banner></Banner>
            </header>

            <main>
                <About></About>

                {/* latest visa section  */}
                <LatestVisas></LatestVisas>

                <Success></Success>

                <TestimonialSection></TestimonialSection>


                <div className='w-2/3 md:w-1/2 mx-auto mb-20 mt-10'>
                    <Lottie animationData={animationData} loop={true} />
                </div>


            </main>

            {/* footer section */}
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Home;