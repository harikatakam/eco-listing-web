"use client";
import Image from 'next/image';
// components/DigitalTwin.js
import { useState, useEffect } from "react";

const digitalTwinData = [
  {
    id: 1,
    title: "Digital Twin",
    description: [
      "Allow buyers to explore property 24x7 anytime anywhere.",
      "Guided tours help buyers to explore properties with one click.",
    ],
    image: "/images/DigitalTwin.png",
  },
  {
    id: 2,
    title: "Live 3D Tours with Our Agent",
    description: [
      "Explore modern kitchens with the latest appliances and design.",
      "Show buyers the functionality and elegance of your kitchen.",
    ],
    image: "/images/DigitalTwin.png",
  },
  {
    id: 3,
    title: "Al Renovation and Staging",
    description: [
      "Visualize a cozy bedroom setup with warm lighting and decor.",
      "Highlight the personal space and comfort of the property.",
    ],
    image: "/images/DigitalTwin.png",
  },
];

export default function DigitalTwin() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fade, setFade] = useState(true);

  const handleThumbnailClick = (index:number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 3000);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % digitalTwinData.length);
      setFade(true);
    }, 3000);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? digitalTwinData.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 3000);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <section className="py-12 bg-[#f8f4ed]">
      <div className="container mx-auto max-w-screen-lg">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-sm uppercase text-black-600 tracking-wide">
            Innovative Selling Solutions
          </h2>
          <h3 className="text-3xl text-black-100 mt-2">
            Industry Leading Tools to Attract More Buyers
          </h3>
        </div>

        <div className="flex justify-between gap-4 mt-6">
        <div>
          <p className="text-gray-500 mt-2">Find Your project with us</p>
          <h3 className="text-3xl text-gray-800 mt-2">
              {digitalTwinData[currentIndex].title}
          </h3>
        </div>
        <div className="md:w-1/3 flex gap-4 items-start flex-wrap">
          {digitalTwinData.map((item, index) => (
             <div key={item.id} className="flex-1">
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              onClick={() => handleThumbnailClick(index)}
              className={`w-24 h-16 object-cover rounded cursor-pointer ${
                currentIndex === index ? "border-green-600" : "border-gray-300"
              }`}
            />
            <p className={`mt-2 cursor-pointer text-[14px] leading-[18px] text-gray-800 ${
                    currentIndex === index ? "font-semibold" : ""
                  }`}
              onClick={() => handleThumbnailClick(index)}>
              {item.title}
            </p>
           </div> 
          ))}
        </div>
        </div>

        <div className="bg-primary-medium mt-[70px] p-6 pr-0 pt-8 pb-[8rem] rounded-lg shadow-md max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch">
          <div className="text-white md:w-1/5 flex flex-col justify-center">
            <ul className="list-disc space-y-2 pr-4">
              {digitalTwinData[currentIndex].description.map((desc, i) => (
                <li key={i} className="flex items-start">
                          <span className="w-2 h-2 mt-2.5 bg-white rounded-full flex-shrink-0"></span>
                          <span className="ml-3">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative md:w-4/5 rounded-lg">
          <div className="absolute z-99 top-[-85px] w-full">
            <img
              src={digitalTwinData[currentIndex].image}
              alt={digitalTwinData[currentIndex].title}
              className={`rounded-lg shadow-lg w-full object-cover ${fade ? "fade-enter-active" : "fade-enter"}`}
            />
          </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-99">  
                 <Image onClick={handlePrev} className='cursor-pointer'
                        src="/images/chevron-double-left.png"
                        alt="Left arrow"
                        width={41}
                        height={41}
                      />              
                {isPlaying ? "❚❚" : 
                <Image onClick={togglePlayPause} className='cursor-pointer'
                        src="/images/play.png"
                        alt="Play"
                        width={41}
                        height={41}
                      />}
              
                <Image onClick={handleNext} className='cursor-pointer'
                        src="/images/chevron-double-right.png"
                        alt="Right arrow"
                        width={41}
                        height={41}
                      />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
