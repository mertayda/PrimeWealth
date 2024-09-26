import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navigation/Navbar";
import { ArrowRight } from "lucide-react";

const HomeHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-playfair">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 z-0"></div>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
      <div className="relative z-30 flex flex-col min-h-screen">
        <Navbar />
        <motion.div
          className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Elevate Your Financial Future with
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Expert Guidance
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Unlock the full potential of your business with our team of
              seasoned professionals. We transform complex financial challenges
              into opportunities for growth and success.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition duration-300 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent text-white font-semibold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition duration-300"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
