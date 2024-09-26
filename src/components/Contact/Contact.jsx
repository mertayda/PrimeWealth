import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Facebook, Twitter, Linkedin, AlertCircle } from "lucide-react";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [showAlert, setShowAlert] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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

  const handleContactClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] opacity-5"></div>
      <motion.div
        ref={containerRef}
        className="relative flex flex-col w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6 text-gray-800 relative"
            whileHover={{ scale: 1.05 }}
          >
            Connect with our Strategy & Corporate Finance Practice
            <motion.span
              className="absolute -z-10 inset-0 bg-blue-100 rounded-lg"
              layoutId="highlight"
            />
          </motion.h1>
          <motion.div variants={itemVariants}>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
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
              color: "#1877F2",
            },
            {
              Icon: Twitter,
              href: "#",
              label: "Twitter",
              desc: "@PrimeWealth",
              color: "#1DA1F2",
            },
            {
              Icon: Linkedin,
              href: "#",
              label: "LinkedIn",
              desc: "LinkedIn",
              color: "#0A66C2",
            },
          ].map(({ Icon, href, label, desc, color }) => (
            <motion.a
              key={label}
              href={href}
              className="group text-gray-500 hover:text-[#2251FF] transition-colors duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon
                  size={24}
                  className="flex-shrink-0 group-hover:text-[#2251FF]"
                />
              </motion.div>
              <span className="text-sm font-medium">{desc}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Alert variant="default">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Thank you for your interest! We'll be in touch soon.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
