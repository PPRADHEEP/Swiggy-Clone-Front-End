import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card mb-4">
      <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <p className="card-text">{restaurant.description}</p>
        <Link to={`/menu/${restaurant.id}`} className="btn btn-primary">View Menu</Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
