import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import AllCampuses from "./components/AllCampuses";
import SingleCampus from "./components/SingleCampus";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/campuses">All Campuses</Link>
        </nav>
        <main>
          <h1>Welcome to a website!</h1>
          <Route exact path="/" />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/campuses/:id" component={SingleCampus} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
