import React, { useState } from "react";
import wsa from "../assets/WSA.png"; // your 3D render
import rezoomex from "../assets/Rezoomex.png"; // your 3D render

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const experiences = [
    {
      title: "Frontend Developer Intern – WebStack Academy",
      duration: "Jul 2024 – Sep 2024",
      description: [
        "Worked on building and enhancing a scalable web application as part of the frontend development team.",
        "Developed reusable and optimized React components to improve performance and maintainability.",
        "Integrated REST APIs to render and manage dynamic, live data.",
        "Ensured a responsive, user-friendly interface across devices and browsers.",
        "This internship strengthened my ability to bridge design with functionality, ensuring seamless interaction between frontend experiences and backend systems."
      ],
      image: wsa,
    },
  ];

  return (
    <div className="py-10 border px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Experience
      </h2>

      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            {/* Logo */}
            <div
              className="w-32 h-32 cursor-pointer flex items-center justify-center bg-white rounded-full shadow-md"
              onClick={() => setSelectedImage(exp.image)}
            >
              <img
                src={exp.image}
                alt={`${exp.title} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                {exp.duration}
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm space-y-1 text-gray-700 dark:text-gray-200">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged logo */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-xl max-w-sm mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
