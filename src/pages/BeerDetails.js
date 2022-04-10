import React from "react";

function BeerDetails({ beer }) {
  return (
    <div className="beer-details">
      <div className="beer-details-img-container">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-details-info-container">
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
