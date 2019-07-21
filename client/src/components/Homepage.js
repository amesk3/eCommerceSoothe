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
          <Link to="/cakes">
            <img src="/images/Maracaibo.png" />
            <p>Cakes</p>
          </Link>
        </div>
        <div>
          <Link to="/pastries">
            <img src="/images/brioche suisse (1).png" />
            <p>Pastries</p>
          </Link>
        </div>
        <div>
          <Link to="cookies">
            <img src="/images/cookies.png" />
            <p>Cookies</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
