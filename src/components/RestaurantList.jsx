import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ selectedFood }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/restaurants") // Ensure backend is running on correct port
      .then(response => {
        setRestaurants(response.data);
        setFilteredRestaurants(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching restaurants:", error);
        setError("Failed to load restaurants.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedFood) {
      const filtered = restaurants.filter(
        restaurant => restaurant.foodType?.toLowerCase() === selectedFood.toLowerCase()
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(restaurants);
    }
  }, [selectedFood, restaurants]);

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

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
