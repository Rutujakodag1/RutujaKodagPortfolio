import React from 'react';
import { Link } from 'react-router-dom';
import RutujaProfile from '../assets/RutujaProfile.png';

const Banner = () => {
  return (
    <div className="w-full bg-cover bg-center py-10 md:py-0 md:h-screen flex items-center border">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section - Text */}
        <div className="text-gray-800 dark:text-white space-y-6 font-play w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold ">
            Know Who I Am
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Welcome, and thank you for stopping by! I'm <span className="font-semibold">Rutuja Kodag</span>, and I'm glad you're here. 
            This space is a reflection of my journey in tech — feel free to explore and learn more about me.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="/about">
              <button className="relative font-bold text-lg tracking-wide group px-4 py-2 mt-2 border">
                Discover More
                {/* <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
                <span className="absolute right-0 top-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
                <span className="absolute left-0 top-0 w-0.5 h-0 bg-black group-hover:h-full transition-all duration-300"></span>
                <span className="absolute right-0 bottom-0 w-0.5 h-0 bg-black group-hover:h-full transition-all duration-300"></span> */}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center mt-8 md:mt-0 mr-8">
  <img
    src={RutujaProfile}
    alt="Rutuja's Profile"
    className="rounded-lg shadow-xl w-60 h-60 sm:w-72 sm:h-72 md:w-full md:h-auto object-cover border-2 border-gray-300"
  />
</div>
      </div>
    </div>
  );
};

export default Banner;
