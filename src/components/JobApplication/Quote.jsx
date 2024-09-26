import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const EconomistQuoteSection = () => {
  const quote = {
    text: "In the world of finance, the most valuable currency is not money, but trust.",
    author: "Christine Lagarde",
    role: "President of the European Central Bank",
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-24 px-4 sm:px-6 lg:px-8 font-playfair">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-lg shadow-2xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Quote
            className="text-blue-900 absolute top-6 left-6 opacity-10"
            size={60}
          />
          <motion.blockquote
            className="text-3xl font-serif text-gray-800 mb-6 relative z-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            "{quote.text}"
          </motion.blockquote>
          <motion.div
            className="text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <cite className="text-blue-900 font-semibold block text-xl" />
            {quote.author}{" "}
            <span className="text-gray-600 text-sm">{quote.role}</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-gray-700 text-xl font-light mb-6">
            Join our team of trusted professionals and shape the future of
            finance.
          </p>
          <motion.a
            href="#"
            className="inline-block px-8 py-4 bg-blue-900 text-white rounded-md font-semibold transition-all duration-300 hover:bg-blue-800 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Career Opportunities
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default EconomistQuoteSection;
