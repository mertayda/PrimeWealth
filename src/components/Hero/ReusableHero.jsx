import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navigation/Navbar";

const ReusableHero = ({ title, subText }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      heroRef.current.style.backgroundPosition = `calc(50% + ${
        moveX * 0.02
      }px) calc(50% + ${moveY * 0.02}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden font-playfair"
      ref={heroRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 z-0 animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] opacity-10 z-10"></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>

      <div className="relative z-30 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              {subText}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReusableHero;
