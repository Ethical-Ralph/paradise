import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import { getFeatured } from "../Redux/competitions/competitionAction";
import { Link } from "react-router-dom";

const Winners = ({ featured, getFeatured }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getFeatured();
  }, []);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div class="container">
        <div class="page-post">
          <h2 class="page-post-title pb-2 pt-4 mb-4 mt-4 active-p">
            Top 5 all time winners
          </h2>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-auto col-lg-12">
            <div
              class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative"
              style={{ height: "510px", backgroundColor: "aqua" }}
            >
              <div class="col d-flex flex-column position-static">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {featured.map((val, i) => (
                    <Carousel.Item key={i}>
                      <img
                        class="bd-placeholder-img"
                        width="100%"
                        height="100%"
                        focusable="false"
                        src={val.associated_product.image}
                        alt="winners slide"
                      />
                      <Carousel.Caption>
                        <h1>{val.title}</h1>
                        <p>
                          <Link
                            to={`/competitions/${val.id}`}
                            className="btn btn-success rounded-curve"
                          >
                            Enter Now
                          </Link>
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div class="col-auto p-4 mt-4 d-flex d-lg-block text-dark text-center">
                <h4 class="mb-0">Thaibault Soulert!</h4>
                <h4 class="mt-5 mb-5">Proud Winner of the</h4>
                <h3 class="mt-5 mb-5">IPhone 11</h3>
                <h4 class="mt-5 mb-5">For just under $3,</h4>
                <h4 class="mt-5 mb-5">
                  Live draw of <br />
                  <span>Thu, May 7, 2020, 12:30 PM</span>
                </h4>
              </div>
            </div>
            <h4 class="text-center pt-4">Love it. Live it. Paradise.</h4>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    featured: state.competition.featuredCompetition || [],
  };
};

const mapDispatchToProps = {
  getFeatured,
};

export default connect(mapStateToProps, mapDispatchToProps)(Winners);
