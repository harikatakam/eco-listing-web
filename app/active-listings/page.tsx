"use client";
import React, { useState, useMemo } from "react";
import PropertyCard from "../components/PropertyCard";
import PropertySearch from "../components/PropertySearch";
import { properties } from "@/data/properties";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  images: string[];
  isFavorite: boolean;
  lat?: number;
  lng?: number;
}

interface Filters {
  searchTerm?: string;
  location?: string;
  minPrice?: string;
  maxPrice?: string;
}

const itemsPerPage = 6;

const PropertyListWithMap: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Replace with your key
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property: Property) => {
      const matchesSearch =
        !filters.searchTerm ||
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesLocation =
        !filters.location || property.location === filters.location;
      const matchesPrice =
        (!filters.minPrice || Number(property.price.replace(/\D/g, "")) >= Number(filters.minPrice)) &&
        (!filters.maxPrice || Number(property.price.replace(/\D/g, "")) <= Number(filters.maxPrice));

      return matchesSearch && matchesLocation && matchesPrice;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      {/* Left Side: Filters + Listings */}
      <div className="col-span-2 overflow-auto p-4">
        <PropertySearch onSearch={setFilters} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {paginatedProperties.map((property: Property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`mx-1 px-4 py-2 ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              } rounded`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side: Google Map */}
      <div className="col-span-1 h-full">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 34.0522, lng: -118.2437 }} // Default: Los Angeles
            zoom={10}
          >
            {filteredProperties.map((property: Property) => (
              <Marker
                key={property.id}
                position={{
                  lat: property.lat || 34.0522 + Math.random() * 0.1, // Simulated random locations
                  lng: property.lng || -118.2437 + Math.random() * 0.1,
                }}
              />
            ))}
          </GoogleMap>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default PropertyListWithMap;
