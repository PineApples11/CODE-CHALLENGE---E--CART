import React from "react";
import products from "../data/products"; // Assuming this contains your products data
import Cart from "./Cart";

const Product = ({ selectedCategory }) => {
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  function handleAddProduct(){
    
  }
  return (
    <ul className="Items">
      {filteredProducts.map((product) => (
        <Cart key={product.id} name={product.name} price={product.price} />
      ))}
    </ul>
  );
};

export default Product;
