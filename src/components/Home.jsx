// src/components/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import RestaurantList from "./RestaurantList";
import "../styles/Home.css";

// Import food images (Only if using src/assets/images/)
import biryaniImg from "../images/biryani.png";
import pizzaImg from "../images/Pizza.png";
import burgerImg from "../images/burger.png";
import cakeImg from "../images/cake.png";
import idliImg from "../images/idli.png";
import chineseImg from "../images/chinese.png";
import parottaImg from "../images/parotta.png";
import dosaImg from "../images/dosa.png";
import pastaImg from "../images/pasta.png";
import momoImg from "../images/momo.png";
import rollsImg from "../images/rolls.png";
import southIndianImg from "../images/south-indian.png";
import kebabImg from "../images/kebab.png";
import noodlesImg from "../images/noodles.png";

const foodItems = [
  { name: "Biryani", img: biryaniImg },
  { name: "Pizza", img: pizzaImg },
  { name: "Burger", img: burgerImg },
  { name: "Cake", img: cakeImg },
  { name: "Idli", img: idliImg },
  { name: "Chinese", img: chineseImg },
  { name: "Parotta", img: parottaImg },
  { name: "Dosa", img: dosaImg },
  { name: "Pasta", img: pastaImg },
  { name: "Momo", img: momoImg },
  { name: "Rolls", img: rollsImg },
  { name: "South Indian", img: southIndianImg },
  { name: "Kebab", img: kebabImg },
  { name: "Noodles", img: noodlesImg },
];

const Home = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (selectedFood) {
      axios
        .get(`http://localhost:5000/restaurants?food=${selectedFood}`) // Fetch based on food item
        .then((response) => setRestaurants(response.data))
        .catch((error) => console.error("Error fetching restaurants:", error));
    }
  }, [selectedFood]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="home-container">
      <div className="header">
        {user ? (
          <div>
            <p>Welcome, {user.fullName}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Please log in to continue.</p>
        )}
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <h2 className="hero-heading">
          Order food & groceries. <br /> Discover best restaurants. 
          <span className="highlight-text"> Swiggy it!</span>
        </h2>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-box">
            <FaMapMarkerAlt className="search-icon" />
            <input type="text" placeholder="Enter your delivery location" />
          </div>
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for restaurant, item or more" />
          </div>
        </div>
      </div>

      {/* Food Category Section */}
      <div className="food-category-section">
        <h2 className="section-heading">Choose Your Favorite Food</h2>
        <div className="food-grid">
          {foodItems.map((food, index) => (
            <div key={index} className="food-card" onClick={() => setSelectedFood(food.name)}>
              <img src={food.img} alt={food.name} className="food-image" />
              <p className="food-name">{food.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant List Section */}
      {selectedFood && (
        <div className="restaurant-section">
          <h2 className="restaurant-heading">
            Available Restaurants for <span className="selected-food">{selectedFood}</span>
          </h2>
          <RestaurantList restaurants={restaurants} />
        </div>
      )}
    </div>
  );
};

export default Home;