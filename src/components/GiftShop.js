import React from "react";
import Header from ".//Heading";
import Image from "../assets/imgs/bottle.jpg";
import { Row, Card, Col } from "react-bootstrap";

const images = [Image, Image, Image];

const GiftShop = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-12 mb-4">
          <h5 class="text-center">Gift shop</h5>
        </div>
        {images.map((val, i) => (
          <div class="col-md-4">
            <div class="card text-white bg-dark mb-4 shadow-sm">
              <img
                class="card-img-top"
                src={val}
                alt="paradise logo"
                height="160"
              />
              <div class="card-body text-center">
                <h5 class="card-text">Food Supply.</h5>
              </div>
            </div>
          </div>
        ))}
        <div class="col-md-12">
          <div class="page-post text-center">
            <button
              type="button"
              class="btn btn-light rounded-curve faq-btn mb-4 mt-4"
            >
              FAQ
            </button>
            <h5 class="mb-4 mt-4">Payment Method.</h5>
            <div class="mt-2 mt-md-0">
              <button class="btn btn-outline-light rounded-circle">Y</button>
              <button class="btn btn-outline-light rounded-circle">T</button>
              <button class="btn btn-outline-light rounded-circle">F</button>
              <button class="btn btn-outline-light rounded-circle">I</button>
              <button class="btn btn-outline-light rounded-circle">W</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftShop;
