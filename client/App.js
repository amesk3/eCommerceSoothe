import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
// import { AllCampuses, SingleCampus } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <h1>Campuses</h1>
          <Route exact path="/" />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
