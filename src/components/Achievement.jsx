import React, { useState, useRef } from "react";
import python_basic from "../assets/python_basic certificate.jpg";
import wsa from "../assets/WSA_Badge_.png";
import star from "../assets/Python5star.png";
import sql from "../assets/sql.png"
import { ChevronLeft, ChevronRight } from "lucide-react";
import runnerUp1 from '../assets/algomind.jpg';
import runnerUp2 from '../assets/algomind2.jpg';
import runnerUp3 from '../assets/algomind3.jpg';
import runnerUp4 from '../assets/algomind4.jpg';
import runnerUp5 from '../assets/hack.jpg';

// import sql from "../assets"
const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image
  const scrollRef = useRef(null);
  const certifications = [
    {
      title: "Python 5-star Badge",
      image: star,
      description: "HackerRank 5-star badge for Python programming skills.",
    },
    {
      title: "Python Certification",
      image: python_basic,
      description: "Certified by HackerRank for completing the Python Basics challenge.",
    },
    {
      title: "SQL Certification",
      image: sql,
      description: "Certified by HackerRank for completing the SQL Basics challenge.",
    },
    {
      title: "WSA Gold Badge",
      image: wsa,
      description: "Awarded for excellence in web development by WebStack Academy.",
    },

  ];

  const achievements = [
    {
      title: "Runner-Up | Sinhgad Hackathon 2K25",
      images: [runnerUp1, runnerUp2, runnerUp3, runnerUp4, runnerUp5], // multiple images
      description: "Secured runner-up position at Sinhgad Hackathon 2K25 for our innovative CareerXpert AI project.",
    },
  ];


  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
<section id="achievements" className="py-10">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl text-gray-600 font-bold text-center mb-8">Achievements</h2>

    <div className="relative flex flex-col gap-12 w-full">
      {achievements.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-8 items-start w-full" >
          {/* Left side - Main Achievement Image */}
          <div className="w-full md:w-1/2" onClick={() => setSelectedImage(item.images[0])}>
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full max-h-100 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Achievement Description and Additional Images */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.description}</p>

            {/* Additional Images */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
              {item.images.slice(1, 5).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`additional-photo-${i}`}
                  className="w-full h-[120px] sm:h-[185px] object-cover rounded-lg shadow-md"

                  onClick={(e) => {
                    e.stopPropagation(); // prevent parent click
                    setSelectedImage(img);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





<section id="certifications" className="py-10">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl text-gray-600 font-bold text-center mb-8">Certifications</h2>

    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>

      {/* Cards wrapper */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-8 py-4 scrollbar-hide scroll-smooth"
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer text-center p-6 flex-shrink-0 transform hover:scale-105"
            onClick={() => setSelectedImage(cert.image)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="h-52 w-52 mx-auto object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Modal for larger image */}
  {selectedImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={() => setSelectedImage(null)}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-xl max-w-3xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )}
</section>

    </>
  );
};

export default Achievements;
