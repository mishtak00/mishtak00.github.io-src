import React from 'react'
import Navbar from '../shared/Navbar'
import WavesAnimation from '../shared/WavesAnimation'
import ContactHeader from './ContactHeader'



const Home = () => {
    return (
        <>
            <Navbar pos='absolute' />
            <WavesAnimation />
            <ContactHeader />
        </>
    );
}

export default Home;
