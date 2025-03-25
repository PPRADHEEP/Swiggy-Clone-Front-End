import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ selectedFood }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/restaurants") // Backend API
      .then(response => {
        setRestaurants(response.data);
        setFilteredRestaurants(response.data); // Initially show all restaurants
      })
      .catch(error => console.error("Error fetching restaurants:", error));
  }, []);

  useEffect(() => {
    if (selectedFood) {
      setFilteredRestaurants(
        restaurants.filter(restaurant => restaurant.foodType === selectedFood)
      );
    } else {
      setFilteredRestaurants(restaurants); // Show all restaurants when no filter is applied
    }
  }, [selectedFood, restaurants]);

  return (
    <div className="row">
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4">
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))
      ) : (
        <p>No restaurants found for this food item.</p>
      )}
    </div>
  );
};

export default RestaurantList;
