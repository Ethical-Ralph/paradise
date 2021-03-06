import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Heading";
import { Row, Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Countdown from "react-countdown";
import { getCompetitions } from "../Redux/competitions/competitionAction";

const LiveDraws = ({ competitions, getCompetitions }) => {
  useEffect(() => {
    getCompetitions();
  }, []);
  return (
    <>
      <div class="row">
        <div class="col-md-12 blog-main">
          <div class="page-post">
            <h2 class="page-post-title pb-4 pt-4 mt-4 mb-4 active-p">
              LiveDraws
            </h2>
          </div>
        </div>
        {competitions.map((val, i) => (
          <div class="col-md-3">
            <div class="card text-white bg-secondary mb-4 shadow-sm">
              <div class="card-body text-center">
                <h5 class="card-text">Live Draw In:</h5>
                <div class="justify-content-between align-items-center">
                  <Countdown date={val.expiration_date} />
                </div>
                <div class="justify-content-between align-items-center">
                  Days Hrs Min Se
                </div>
              </div>
              <img
                class="card-img-top"
                src={val.associated_product.image}
                alt="paradise logo"
                height="160"
              />
              <div class="card-body text-center">
                <h5 class="card-text">
                  <Link to={`/live-draw/${val.id}`} style={{ color: "white" }}>
                    {val.title}
                  </Link>
                </h5>
                <div class="justify-content-between align-items-center">
                  <p>$ {val.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    competitions: state.competition.all || [],
  };
};

const mapDispatchToProps = {
  getCompetitions,
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveDraws);
