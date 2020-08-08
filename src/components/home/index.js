import React from 'react'
import Navbar from '../shared/Navbar'
import NetAnimation from '../shared/NetAnimation'
import Header from './Header'



const Home = () => {
    return (
        <>
            <Navbar pos='absolute' />
            <NetAnimation />
            <Header />
        </>
    );
}

export default Home;
