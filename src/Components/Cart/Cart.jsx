import React, { useEffect, useState } from "react";
import "./Cart.css";
import Home from "../Home/home";
const Cart = () => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);
  return (
    <div className="container">
      <div className="grid grid-cols-3">
        {allActors.map((item) => (
          <Home key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
