import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/imgs/palmtree.png";

const Navigation = ({ cartLength }) => {
  return (
    <header class="blog-header py-2">
      <div class="row flex-nowrap justify-content-between align-items-center mb-5">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark justify-content-center">
          <a class="navbar-brand active-p" href="./">
            <img src={logo} alt="paradise logo" height="70" width="70" />{" "}
            Paradise Competitions
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarCollapse"
            style={{ flexGrow: 0 }}
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Competitions
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  How to play
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Live Draws
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Podium
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle mr-md-2"
                  href="#"
                  id="bd-versions"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  🇬🇧 EN
                </a>
                <div
                  class="dropdown-menu dropdown-menu-md-right"
                  aria-labelledby="bd-versions"
                >
                  <a class="dropdown-item active" href="/docs/4.5/">
                    Latest (4.5.x)
                  </a>
                  <div class="dropdown-divider"></div>
                  <a
                    class="dropdown-item"
                    href="https://getbootstrap.com/docs/3.4/"
                  >
                    v3.4.1
                  </a>
                  <a
                    class="dropdown-item"
                    href="https://getbootstrap.com/2.3.2/"
                  >
                    v2.3.2
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/docs/versions/">
                    All versions
                  </a>
                </div>
              </li>
            </ul>
            <div class="mt-2 mt-md-0">
              <button class="btn btn-success rounded-curve" type="submit">
                Client Login
              </button>
              <button class="btn btn-light rounded-curve" type="submit">
                Register
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartLength: state.cart.cart_items.length,
  };
};

export default connect(mapStateToProps)(Navigation);
