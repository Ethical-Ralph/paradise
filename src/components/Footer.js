import React from "react";
import youtube from "../assets/imgs/youtube-brands.svg";
import telegram from "../assets/imgs/telegram-brands.svg";
import facebook from "../assets/imgs/facebook-brands.svg";
import paradise from "../assets/imgs/palmtree.png";
import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <footer class="container">
      <p>
        Copyright &copy; 2020 Paradise Competitions
        <span>All right reserved</span>
        <span>
          <a href="mailto:info@paradisecompetitions.eu">
            info@paradisecompetitions.eu
          </a>
        </span>
        <span>
          <a href="tel:0834999160">0834 999 160</a>
        </span>
        <span>
          <a href="#">Terms and Conditions</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
