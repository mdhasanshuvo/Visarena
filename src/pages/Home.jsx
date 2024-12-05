import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LatestVisas from '../components/LatestVisas';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            {/* header section */}
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>

            <main>

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