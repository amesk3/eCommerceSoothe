import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className="header">Our products</h1>
      </div>
      <div className="homeCategories">
        <div>
          <Link to="/chocolate">
            <img src="/images/chocolate.jpg" width="300px" height="250px" />
            <h5>Chocolate</h5>
          </Link>
        </div>
        <div>
          <Link to="/candles">
            <img src="/images/candle.jpg" width="250px" height="250px" />
            <h5>Candles</h5>
          </Link>
        </div>
        <div>
          <Link to="/crystals">
            <img
              src="/images/healingcrystals.jpg"
              width="250px"
              height="250px"
            />
            <h5>Crystals</h5>
          </Link>
        </div>
      </div>
      <h1 className="homepage-paragraph-header">Our philosophy</h1>
      <div>
        <p className="homepage-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
