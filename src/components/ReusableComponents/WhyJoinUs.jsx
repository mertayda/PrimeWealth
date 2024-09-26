import React from "react";
import { TrendingUp, Users, Lightbulb, Award, Briefcase } from "lucide-react";
const reasons = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Accelerate your career in a dynamic environment with clear paths for advancement and professional development.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Join a team of passionate professionals where your ideas are valued and teamwork is celebrated.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description:
      "Be at the forefront of financial innovation, working with cutting-edge technologies and methodologies.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description:
      "Your contributions are recognized and rewarded through competitive compensation and performance bonuses.",
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description:
      "Enjoy flexible work arrangements and policies that support your personal and professional life.",
  },
];

const WhyJoinUs = () => {
  return (
    <div className="w-full py-24 px-8 bg-gradient-to-b from-gray-50 to-white font-playfair">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-yellow-300 transform -skew-x-12"></div>
            <h2 className="relative z-10 text-2xl text-gray-800 font-bold py-2 px-6">
              Why Join US
            </h2>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Build Your Career with a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">
              Financial Leader{" "}
            </span>
          </h3>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            {" "}
            Join our team of financial experts and innovators. We offer more
            than just a job – we offer a career where you can make a real
            impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              key={index}
            >
              <div className="flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
              </div>

              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {reason.title}
              </h4>
              <p className="text-center text-gray-500">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-full   hover:from-yellow-600 hover:to-yellow-500  transition-all  duration-300 shadow-lg hover:shadow-xl">
            {" "}
            Explore Our Opportunities
            <Briefcase className="ml-2 w-5 h-5"></Briefcase>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
