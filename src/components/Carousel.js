import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import { getFeatured } from "../Redux/competitions/competitionAction";
import { Link } from "react-router-dom";

const LandCarousel = ({ featured, getFeatured }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getFeatured();
  }, []);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {featured.map((val, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={val.associated_product.image}
            alt="First slide"
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

export default connect(mapStateToProps, mapDispatchToProps)(LandCarousel);
