import React from "react";
import {
  DollarSign,
  TrendingUp,
  Clock,
  Headset,
  PieChart,
  Briefcase,
} from "lucide-react";

import economist from "../../assets/images/economist.jpeg";
const projects = [
  {
    title: "Financial Advices and Guides",
    description:
      "Our fast and innovative approach ensures an enjoyable and professional experience. Rely on our expert insights to make informed financial decisions.",
    icon: DollarSign,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Company Growth",
    description:
      "Our commitment to fast and innovative financial solutions ensures that your company not only thrives but experiences sustainable growth.",
    icon: TrendingUp,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "On Time Services",
    description:
      "Our fast and innovative approach guarantees on-time services, ensuring that you receive efficient and reliable financial solutions precisely when you need them.",
    icon: Clock,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Best Support",
    description:
      "Our expert team is here to offer the best support, bringing you tailored financial solutions that challenge established thinking and drive transformation.",
    icon: Headset,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Investment Strategies",
    description:
      "We provide cutting-edge investment strategies that align with your financial goals, ensuring optimal returns and risk management.",
    icon: PieChart,
    color: "from-red-400 to-red-600",
  },
  {
    title: "Financial Planning",
    description:
      "Our comprehensive financial planning services help you map out your financial future, ensuring you achieve your long-term goals.",
    icon: Briefcase,
    color: "from-indigo-400 to-indigo-600",
  },
];

const ServiceCard = ({ title, description, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
    <div className="flex items-center mb-6">
      <div
        className={`bg-gradient-to-r ${color} p-4 rounded-full mr-6 transform group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-600 transition-all duration-300">
        {title}
      </h4>
    </div>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
      {description}
    </p>
  </div>
);

const GrowthWithOurClients = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-7xl font-playfair">
        <div className="flex flex-col space-y-20">
          <div className="text-center relative">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 relative z-10">
              Growing with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
                Our Clients
              </span>
            </h2>
            <p className="text-2xl font-semibold text-gray-700 max-w-3xl mx-auto relative z-10">
              Decades of Collective Experience in Financial Services
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={economist}
                alt="Team working together"
                className="rounded-lg shadow-2xl w-full  relative"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-xl leading-relaxed">
                Our team's extensive experience and dedication to client success
                in the financial services sector have allowed us to grow
                alongside our clients. We take pride in fostering long-term
                relationships built on trust, expertise, and results.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Learn More About Us
              </a>
            </div>
          </div>
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Financial Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <ServiceCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthWithOurClients;
