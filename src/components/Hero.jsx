// import { useState, useEffect } from 'react';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Or any icons you prefer
// import cse1 from '../assets/bg1.jpg';
// import cse2 from '../assets/CSE2.png';
// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       id: 1,
//       bgImage: `url(${cse1})`,
//       // title: 'Welcome to My Portfolio',
//       // subtitle: 'I build amazing web experiences',
//     },
//     {
//       id: 2,
//       bgImage: `url(${cse1})`,
//       // title: 'Full Stack Developer',
//       // subtitle: 'Passionate about clean code',
//     },
//   ];

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPrev = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
// <div className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
// {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{ backgroundImage: slide.bgImage }}
//         >
//           {/* Overlay (optional) */}
//           <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-center">
//             <div>
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
//               <p className="text-xl md:text-2xl">{slide.subtitle}</p>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
//       >
//         <FiChevronLeft size={24} />
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
//       >
//         <FiChevronRight size={24} />
//       </button>

//       {/* Dot Indicators (optional) */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition ${
//               index === currentSlide ? 'bg-white' : 'bg-gray-400'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;


import { useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
const HeroSlider = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);
  // const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);

  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Particles effect
  // const particles = Array.from({ length: 30 }).map((_, i) => ({
  //   id: i,
  //   x: Math.random() * 100,
  //   y: Math.random() * 100,
  //   size: Math.random() * 3 + 1,
  // }));

  return (
    <div 
      ref={heroRef}
      className="relative h-[500px] w-full overflow-hidden bg-gray-900"
      onMouseMove={handleMouseMove}
    >


      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Typing Headline */}
        <div className="text-5xl md:text-7xl font-bold text-white mb-6">
          <TypeAnimation
            sequence={[
              'Hello World!',
              1000,
              'I Build Digital Experiences',
              1000,
              'Welcome To My Portfolio',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Glowing Button */}
        <motion.button
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/projects">
          <span className="relative z-10 text-white">Explore My Work</span>
          </Link>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              x: [-100, 200],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mt-2"
              animate={{
                y: [0, 5],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div> */}
      </div>
    </div>
    
  );
};

export default HeroSlider;