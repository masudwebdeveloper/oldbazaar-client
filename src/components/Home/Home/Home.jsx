import React from 'react';
import About from '../About/About';
import AdvertisePage from '../AdvertisePage/AdvertisePage';
import Banner from '../Banner/Banner';
import Contactus from '../ContactUs/Contactus';
import SecondHandProducts from '../SecondHandProducts/SecondHandProducts';
import Subscriber from '../Subcriber/Subscriber';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AdvertisePage></AdvertisePage>
            <SecondHandProducts></SecondHandProducts>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;