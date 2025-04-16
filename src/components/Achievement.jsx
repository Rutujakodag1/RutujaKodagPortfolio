import React, { useState } from "react";
import python_basic from "../assets/python_basic certificate.jpg";
import wsa from "../assets/WSA_Badge_.png";
import star from "../assets/Python5star.png";
// import sql from "../assets"
const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image

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
      image: star,
      description: "HackerRank 5-star badge for Python programming skills.",
    },
    {
      title: "WSA Gold Badge",
      image: wsa,
      description: "Awarded for excellence in web development by WebStack Academy.",
    },
    
  ];

  return (
    <section id="certifications" className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center cursor-pointer"
              onClick={() => setSelectedImage(cert.image)} // Set selected image for modal
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-40 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for larger image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal when clicking outside the image
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
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
  );
};

export default Achievements;
