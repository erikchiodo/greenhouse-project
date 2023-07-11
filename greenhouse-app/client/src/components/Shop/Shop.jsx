import React, { useState } from 'react';
import productsData from '../path/to/productsData'; 
import SearchBar from './SearchBar';
import ProductsList from '../shared/ProductList';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredProducts = selectedCategory === "All Categories" 
    ? productsData 
    : productsData.filter(product => product.categoryName === selectedCategory);

  return (
    <main>
      <SearchBar setSelectedCategory={setSelectedCategory} />
      <ProductsList products={filteredProducts} productsCount={12} />
    </main>
  );
}
