import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_ENDPOINT = "https://ih-beers-api2.herokuapp.com/beers";

const Beers = () => {
  const navigate = useNavigate();
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios.get(`${API_ENDPOINT}`);
      setBeers(data);
    };
    getBeers();
  }, [beers]);

  const allBeers = beers.map((beer) => {
    return (
      <div className="all-beers">
        <img
          onClick={() => {
            navigate("/beer");
          }}
          src={beer.image_url}
          alt={beer.name}
        />
        <div>
          <p> {beer.name} </p>
          <p> {beer.tagline} </p>
          <p> {beer.contributed_by} </p>
          <Link to={`beers/${beer._id}`}> See Details </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1> Beers </h1>
      {allBeers}
    </div>
  );
};

export default Beers;
