"use client";
import React, { useState } from "react";

const PropertySearch = ({ onSearch }: { onSearch: (filters: any) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onSearch({ searchTerm, location, minPrice, maxPrice });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <input
        type="text"
        placeholder="Search properties..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="">All Locations</option>
        <option value="Beverly Hills, CA">Beverly Hills, CA</option>
        <option value="Manhattan, NY">Manhattan, NY</option>
        <option value="Miami, FL">Miami, FL</option>
      </select>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
      </div>
      <button
        onClick={handleSearch}
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default PropertySearch;
