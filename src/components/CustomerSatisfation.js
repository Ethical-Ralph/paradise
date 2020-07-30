import React from "react";
import Header from "./Heading";
import logo from "../assets/imgs/palmtree.png";

const CustomerSatisfation = () => {
  return (
    <>
      <div>
        <Header text="Customer satisfation" />
        <div>Trust pilot widget here</div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="page-post text-center">
            <h5>Find us on.</h5>
            <div class="mt-2 mt-md-0">
              <button class="btn btn-outline-light rounded-circle">Y</button>
              <button class="btn btn-outline-light rounded-circle">T</button>
              <button class="btn btn-outline-light rounded-circle">F</button>
              <button class="btn btn-outline-light rounded-circle">I</button>
              <button class="btn btn-outline-light rounded-circle">W</button>
            </div>
            <img src={logo} alt="paradise logo" height="120" width="100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSatisfation;
