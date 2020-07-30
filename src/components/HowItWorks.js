import React from "react";
import Heading from "./Heading";
import Image from "../assets/imgs/palmtree.png";
import logo from "../assets/imgs/palmtree.png";
import Card from "react-bootstrap/Card";

const HowItWorks = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-12 blog-main">
          <div class="page-post">
            <h2 class="page-post-title pb-4 mb-4 active-p">How It Works</h2>

            <p>
              <span class="active-p">Step 1.</span> Pick amazing prizes and
              enter competition.
            </p>
            <p>
              <span class="active-p">Step 2.</span> Select tickets,or let the
              Lucky Dip selector choose a letter and a number for you.
            </p>
            <p>
              <span class="active-p">Step 3.</span> Finalize payment. Recive
              your product and be lucky... Join our winners podium! Daily
              winners!{" "}
            </p>
            <p>
              Paradise Competitions has already made{" "}
              <span class="active-p">126</span> Winners and given away{" "}
              <span class="active-p">26, 566, 99</span> of prizes
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-md-auto col-lg-7">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto d-none d-lg-block">
              <img src={logo} alt="paradise logo" height="250" width="220" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h4 class="mb-0">You've got to be in it to win it!</h4>
              <p class="mt-5 mb-5">**** *Trust Pilot.</p>
              <div class="mt-2 mt-md-0">
                <button class="btn btn-info" type="submit">
                  Like 11K
                </button>
                <button class="btn btn-info" type="submit">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
