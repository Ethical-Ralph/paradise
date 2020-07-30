import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Heading";
import { Row, Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Countdown from "react-countdown";

const LiveDraws = ({ competitions }) => {
  return (
    <>
      <Header text="LiveDraws" />
      <Row>
        {competitions.map((val, i) => (
          <Col md="6" lg="3" key={val.id}>
            <Card className="competition">
              <Card.Body>
                <Card.Text>Live Draw In</Card.Text>
                <Card.Text>
                  <Countdown date={val.expiration_date} />
                </Card.Text>
              </Card.Body>
              <Card.Img
                variant="top"
                src={val.associated_product.image}
                height="100"
                width="180"
              />
              <Link to={`/live-draw/${val.id}`}>
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>{val.price}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    competitions: state.competition.all || [],
  };
};

export default connect(mapStateToProps)(LiveDraws);
