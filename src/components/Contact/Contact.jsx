import React from "react";
import { motion } from "framer-motion";
import { Mail, Facebook, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <div className="bg-gradient-to-b from-gray-50 to-white max-h-screen flex items-center">
      <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6 text-gray-800"
            variants={itemVariants}
          >
            Connect with our Strategy & Corporate Finance Practice
          </motion.h1>
          <motion.div variants={itemVariants}>
            <motion.button
              className="inline-flex items-center  px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-2" size={20} /> Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.hr
          className="my-8 sm:my-10 md:my-12 border-t-2 border-gray-200 w-full"
          variants={itemVariants}
        />
        <motion.div
          className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8"
          variants={itemVariants}
        >
          {[
            {
              Icon: Facebook,
              href: "#",
              label: "Facebook",
              desc: "@PrimeWealth",
            },
            {
              Icon: Twitter,
              href: "#",
              label: "Twitter",
              desc: "@PrimeWealth",
            },
            { Icon: Linkedin, href: "#", label: "LinkedIn", desc: "LinkedIn" },
          ].map(({ Icon, href, label, desc }) => (
            <motion.a
              key={label}
              href={href}
              className="text-gray-500 hover:text-[#2251FF] transition-colors duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={24} className="flex-shrink-0" />
              <span className="text-sm font-medium">{desc}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
