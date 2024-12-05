import React from 'react';
import Header from '../components/Navbar';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LatestVisas from '../components/LatestVisas';

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

        </div>
    );
};

export default Home;