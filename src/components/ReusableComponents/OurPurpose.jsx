import React from "react";
import { Lightbulb, Users, TrendingUp } from "lucide-react";
import creative from "../../assets/images/creative.jpg";

const OurPurpose = () => {
  const purposes = [
    {
      icon: Lightbulb,
      title: "Igniting Creativity",
      description:
        "We spark new ideas and push boundaries to create groundbreaking solutions that transform industries.",
    },
    {
      icon: Users,
      title: "Strengthening Partnerships",
      description:
        "We cultivate strong, collaborative relationships that drive collective success and unlock new opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Accelerating Growth",
      description:
        "We empower businesses and individuals to achieve exponential growth by providing the tools and support needed for success.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row  justify-center bg-white p-8 max-w-7xl mx-auto gap-12 font-playfair">
      <div className="md:w-1/2 pr-8">
        <div className="inline-block bg-yellow-300 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          Our Purpose
        </div>
        <h1 className="text-4xl font-bold mb-8">
          Empowering Growth, Inspiring Excellence
        </h1>
        <div className="space-y-6">
          {purposes.map((purpose, index) => (
            <div key={index} className="flex items-start">
              <purpose.icon className="w-6 h-6  mr-4 mt-1 text-gray-600" />
              <div>
                <h2 className="text-xl font-semibold">{purpose.title}</h2>
                <p className="text-gray-600">{purpose.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" md:w-1/3 mt-8 md:mt-0 ">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD700] to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src={creative}
            className="mt-3  rounded-lg shadow-lg object-cover"
            alt="Professional reading financial planning book"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
