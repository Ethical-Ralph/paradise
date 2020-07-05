import React from 'react';
import Heading from './Heading';
import Image from '../assets/imgs/palmtree.png';
import logo from "../assets/imgs/palmtree.png"
import Card from 'react-bootstrap/Card';

const HowItWorks = () => {
  return (
    <>
      <div class="py-5">
        <Heading text="How It Works" />
        <div class="text-gray-300 my-10">
          <p class="">Pick an amazing prize and enter the competition</p>
          <p class="">Select your tickets, or let the lucky Dip selector choose a letter and number for you</p>
          <p class="">Paradise Competition has already made
            <span class="give-bg">1344</span>winners and given away
            <span class="give-bg">88738783753</span> of prices!
          </p>
        </div>
      </div>
      <div className="centerlize">
        <Card style={{ width: '40rem', flexDirection: 'row', justifyContent: 'center', border: '1px solid aliceblue' }}>
          <img
            alt="paradiselogo"
            src={logo}
            width="200"
            height="200"
          />
          <Card.Body>
            <Card.Title>You've got to be in it to win it !</Card.Title>
            <h3>Trust pilot here</h3>
            <h3>Facebook plugin here</h3>
          </Card.Body>
        </Card>
      </div>

    </>
  );
}

export default HowItWorks;