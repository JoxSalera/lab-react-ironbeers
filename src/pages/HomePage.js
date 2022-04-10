import React from "react";
import beers from "../assets/beers.png";
import newBeers from "../assets/new-beer.png";
import randomBeers from "../assets/random-beer.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <Link to="/beers">
        <img src={beers} alt="" />
        <h2>All Beers</h2>
      </Link>
      <Link to="/random-beer">
        <img src={newBeers} alt="" />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <img src={randomBeers} alt="" />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
};

export default HomePage;
