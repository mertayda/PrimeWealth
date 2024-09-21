import React from "react";
import { ChevronRight } from "lucide-react";
import seedling from "../../assets/icons/seedling.png";
import financial from "../../assets/icons/financial.png";
import goverment from "../../assets/icons/government.png";
import buildings from "../../assets/icons/buildings.png";
import controller from "../../assets/icons/controller.png";

const services = [
  {
    icon: seedling,
    title: "Agriculture",
    description:
      "Our clients enjoy accurate and timely specialized records of valuation, forecasts, and profitability which provide valuable information for the assessment of business performances.",
  },
  {
    icon: goverment,
    title: "Government",
    description:
      "We support our government clients with their revenue drive and inclusion agenda, deploying technological support to automate tax returns filing and remittance processes.",
  },
  {
    icon: financial,
    title: "Financial Services",
    description:
      "Our clients have benefited from our capabilities, expertise and relationships with various government agencies in the resolution of tax and other financial conflicts.",
  },
  {
    icon: buildings,
    title: "MSMEs",
    description:
      "We are strategically positioned to assist Micro, Small, and Medium Enterprises in mitigating the financial and accounting challenges faced by this vital sector of the economy.",
  },
  {
    icon: controller,
    title: "Gaming Sector",
    description:
      "Our clients in the gaming sector have benefited from our expertise and vast knowledge in this area of specialization, navigating the unique challenges of this dynamic industry.",
  },
];

const ServiceCard = ({ title, description, icon, index }) => (
  <div className="bg-white shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl group">
    <div className="flex flex-col items-center mb-4">
      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300">
        <img className="w-10 h-10" src={icon} alt={title} />
      </div>
      <h4 className="text-xl font-bold text-gray-800 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-600 transition-all duration-300">
        {title}
      </h4>
    </div>
    <p className="text-gray-600 text-center mb-4 group-hover:text-gray-800 transition-colors duration-300">
      {description}
    </p>
    <div className="text-center">
      <a
        href="#"
        className="inline-flex items-center text-purple-600 font-semibold group-hover:text-yellow-500 transition-colors duration-300"
      >
        Learn More
        <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  </div>
);

const OurIndustry = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl font-serif">
        <div className="max-w-3xl text-center mx-auto mb-16 sm:mb-24">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-600 transform -skew-x-12 rounded-lg"></div>
            <h2 className="relative text-2xl font-bold text-white py-2 px-6 uppercase tracking-wide">
              Our Industries
            </h2>
          </div>
          <p className="text-4xl sm:text-6xl font-bold leading-tight uppercase mb-6">
            Know your market,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600">
              grow your business.
            </span>
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in diverse industries, providing tailored solutions to
            drive growth and success across various sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurIndustry;
