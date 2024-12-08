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

const Home = () => {
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className=''>
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


            </main>

            {/* footer section */}
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Home;