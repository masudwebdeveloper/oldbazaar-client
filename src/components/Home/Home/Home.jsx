import React from 'react';
import AdvertisePage from '../AdvertisePage/AdvertisePage';
import Banner from '../Banner/Banner';
import SecondHandProducts from '../SecondHandProducts/SecondHandProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisePage></AdvertisePage>
            <SecondHandProducts></SecondHandProducts>
        </div>
    );
};

export default Home;