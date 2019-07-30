import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className="header">OUR PRODUCTS</h1>
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
    </div>
  );
};

export default HomePage;
