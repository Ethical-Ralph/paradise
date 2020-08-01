import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/imgs/palmtree.png";
import cartImg from "../assets/imgs/cart.png";

const Navigation = ({ cartLength, isLoggedIn }) => {
  return (
    <header class="blog-header py-2">
      <div class="row flex-nowrap justify-content-between align-items-center mb-5">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark justify-content-center">
          <Link class="navbar-brand active-p" href="/">
            <img src={logo} alt="paradise logo" height="70" width="70" />{" "}
            Paradise Competitions
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarCollapse"
            style={{ flexGrow: 0 }}
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/competitions">
                  Competitions
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/#howtowin">
                  How to play
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/live-draw">
                  Live Draws
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="podium">
                  Podium
                </Link>
              </li>
              {isLoggedIn ? (
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">
                    <img
                      width={"25px"}
                      height={"25px"}
                      src={cartImg}
                      alt="cart"
                    />
                    {cartLength}
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <div class="mt-2 mt-md-0">
                    <Link to="/login">
                      <button
                        class="btn btn-success rounded-curve"
                        type="submit"
                      >
                        Client Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button class="btn btn-light rounded-curve" type="submit">
                        Register
                      </button>
                    </Link>
                  </div>
                </li>
              )}
              {/* <li class="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle mr-md-2"
                  to="#"
                  id="bd-versions"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  🇬🇧 EN
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-md-right"
                  aria-labelledby="bd-versions"
                >
                  <Link class="dropdown-item active" to="/docs/4.5/">
                    Latest (4.5.x)
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link
                    class="dropdown-item"
                    href="https://getbootstrap.com/docs/3.4/"
                  >
                    v3.4.1
                  </Link>
                  <Link
                    class="dropdown-item"
                    href="https://getbootstrap.com/2.3.2/"
                  >
                    v2.3.2
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" href="/docs/versions/">
                    All versions
                  </Link>
                </div>
              </li>*/}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    cartLength: state.cart.cart_items.length,
  };
};

export default connect(mapStateToProps)(Navigation);
