import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className="header">OUR PRODUCTS</h1>
      </div>
      <div className="homeCategories">
        <div>
          <Link to="/chocolate">
            <img src="/images/chocolate.jpg" width="300" height="300" />
            <p>Chocolate</p>
          </Link>
        </div>
        <div>
          <Link to="/candles">
            <img src="/images/candle.jpg" width="300" height="300" />
            <p>Candles</p>
          </Link>
        </div>
        <div>
          <Link to="/crystals">
            <img src="/images/healingcrystals.jpg" width="300" height="300" />
            <p>Crystals</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
