"use client";
import React from "react";
import { properties } from "../../data/properties";
import PropertyCard from "../components/PropertyCard";

const PropertyList = () => {
  return (
    <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property:any) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
    </div>
  );
};

export default PropertyList;
