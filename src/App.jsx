import React, { useState } from "react";
import "./index.css";
import Product from "./assets/Product";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <header>
        <h2>Product List</h2>
        <button onClick={toggleDarkMode}> Dark Mode</button>
      </header>

      <div className="Filter">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="footwear">Footwear</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
          
          
        </select>
      </div>

      <Product selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
