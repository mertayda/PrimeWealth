import React from "react";
import { Star, SmilePlus, ArrowRight } from "lucide-react";
import expert from "../../assets/images/expert.png";

const AboutUs = () => {
  return (
    <div className="w-full py-24 px-8 bg-gradient-to-b from-gray-50 to-white font-serif">
      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-yellow-300 transform -skew-x-12"></div>
              <h1 className="relative z-10 text-2xl text-gray-800 font-bold py-2 px-6">
                About Us
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              We empower businesses through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">
                financial expertise
              </span>{" "}
              and innovation.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of financial experts is dedicated to providing the
              insights and tools you need to achieve your business's financial
              goals and secure a prosperous future.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-yellow-600 font-semibold text-lg hover:text-green-800 transition-colors duration-300 group"
            >
              Learn More About Our Services
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD700] to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src={expert}
                alt="Financial Experts"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-24">
          {[
            {
              icon: Star,
              color: "text-yellow-500",
              count: "400+",
              text: "Financial Services",
            },
            {
              icon: SmilePlus,
              color: "text-green-500",
              count: "100+",
              text: "Satisfied Clients",
            },
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-200 rounded-full blur group-hover:bg-gray-300 transition-colors duration-300"></div>
                  <div className="relative bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <item.icon className={`w-12 h-12 ${item.color}`} />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-black mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:to-purple-600 transition-all duration-300">
                {item.count}
              </h1>
              <p className="text-xl text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
