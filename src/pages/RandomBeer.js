import React from "react";
import axios from "axios";
import BeerDetails from "../pages/BeerDetails";
import { useState, useEffect } from "react";
const API_ENDPOINT = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const getBeer = async () => {
      const beersFromApi = await axios.get(`${API_ENDPOINT}/random`);
      setBeer(beersFromApi.data);
    };
    getBeer();
  }, []);

  return <BeerDetails beer={beer} />;
}

export default RandomBeer;
