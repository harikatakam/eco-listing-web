"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(property.isFavorite);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Slider */}
      <div className="relative">
        <img
          src={property.images[currentImage]}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <FontAwesomeIcon
            icon={isFavorite ? solidHeart : regularHeart}
            className={`text-red-500 text-xl`}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>
        <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded">
          {currentImage + 1}/{property.images.length}
        </div>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-2 rounded-md hover:bg-white/50 transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-2 rounded-md hover:bg-white/50 transition"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg">{property.title}</h3>
        <p className="text-blue-500">{property.price}</p>
        <p className="text-gray-600 text-sm">{property.location}</p>
        <div className="mt-2 text-gray-700 text-sm">
          {property.bedrooms} Beds • {property.bathrooms} Baths • {property.size}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
