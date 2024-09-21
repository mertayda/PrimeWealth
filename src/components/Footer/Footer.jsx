import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import Logo from "../../assets/icons/logo.png";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 z-0 py-16 font-playfair text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          <div className="col-span-1 lg:col-span-2">
            <motion.img
              src={Logo}
              alt="Company Logo"
              className=" mb-4 h-36 w-36 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <p className=" mb-4">
              Prime Wealth Associates provides expert financial services to help
              you achieve your business goals.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className=" hover:text-yellow-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About Us", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className=" hover:text-yellow-500">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className=" mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yelow-500"
                required
              />
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center  text-sm">
          © {new Date().getFullYear()} Prime Wealth Associates. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
