import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LatestVisas from '../components/LatestVisas';
import Footer from '../components/Footer';
import About from './About';

const Home = () => {
    return (
        <div className=''>
            {/* header section */}
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>

            <main>

                <About></About>

                {/* latest visa section  */}
                <LatestVisas></LatestVisas>


            </main>

            {/* footer section */}
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Home;