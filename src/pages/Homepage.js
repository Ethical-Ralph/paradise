import React from 'react';
import Carousel from '../components/Carousel';
import HowItWorks from '../components/HowItWorks';
import Competitions from './Competitons';
import Winners from '../components/Winners';
import CustomerSatisfation from '../components/CustomerSatisfation';
import GiftShop from '../components/GiftShop';
import LiveDrawList from '../components/LiveDrawList';

const Homepage = () => {
  return (
    <>
      <Carousel />
      <HowItWorks />
      <Competitions />
      <Winners />
      <CustomerSatisfation />
      <GiftShop />
      <LiveDrawList/>
    </>
  );
}

export default Homepage;
