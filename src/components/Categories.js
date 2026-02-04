import React, { useState } from "react";

import TechnologyBooks from "./TechnologyBooks";
import SportsBooks from "./SportsBooks";
import TravelBooks from "./TravelBooks";
import FashionBooks from "./FashionBooks";

import "./Categories.css";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="categories-container">
      <h2>Categories</h2>

      <div className="categories-grid">

        <div
          className="category-card"
          onClick={() => setSelectedCategory("technology")}
        >
          Technology
        </div>

        <div
          className="category-card"
          onClick={() => setSelectedCategory("sports")}
        >
          Sports
        </div>

        <div
          className="category-card"
          onClick={() => setSelectedCategory("travel")}
        >
          Travel
        </div>

        <div
          className="category-card"
          onClick={() => setSelectedCategory("fashion")}
        >
          Fashion
        </div>

      </div>

      {/* Render correct books section */}
      {selectedCategory === "technology" && <TechnologyBooks />}
      {selectedCategory === "sports" && <SportsBooks />}
      {selectedCategory === "travel" && <TravelBooks />}
      {selectedCategory === "fashion" && <FashionBooks />}
    </div>
  );
}

export default Categories;
