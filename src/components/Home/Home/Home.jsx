import React from 'react';
import AdvertisePage from '../AdvertisePage/AdvertisePage';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Contactus from '../ContactUs/Contactus';
import Features from '../Features/Features';
import SecondHandProducts from '../SecondHandProducts/SecondHandProducts';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            {/* <About></About> */}
            <AdvertisePage></AdvertisePage>
            <SecondHandProducts></SecondHandProducts>
            <Features></Features>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;