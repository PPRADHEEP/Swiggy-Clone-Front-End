import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/restaurants/${id}/menu`)
      .then(response => setMenuItems(response.data))
      .catch(error => console.error("Error fetching menu:", error));
  }, [id]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Menu</h2>
      <div className="row">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card mb-3">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">₹{item.price}</p>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
