import React from 'react';
import Header from '../components/Navbar';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            {/* header section */}
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>

        </div>
    );
};

export default Home;