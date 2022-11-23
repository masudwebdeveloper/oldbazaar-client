import React from 'react';
import AdvertisePage from '../AdvertisePage/AdvertisePage';
import Banner from '../Banner/Banner';
import SecondHandProducts from '../SecondHandProducts/SecondHandProducts';
import Subscriber from '../Subcriber/Subscriber';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisePage></AdvertisePage>
            <SecondHandProducts></SecondHandProducts>
            <Subscriber></Subscriber>
        </div>
    );
};

export default Home;