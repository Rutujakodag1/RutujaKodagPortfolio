import { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const heroRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Handle mouse movement for 3D tilt effect (if you'd like to add transforms later)
  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={heroRef}
      className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
      onMouseMove={handleMouseMove}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 border">
        {/* Typing Headline */}
        <div className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-6">
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
        <Link to="/projects">
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0"
              animate={{
                opacity: [0, 0.8, 0],
                x: [-100, 200],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;
