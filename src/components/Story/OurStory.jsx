import React from "react";
import { Briefcase, MapPin, Phone, ChevronRight } from "lucide-react";

const OurStory = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-playfair">
        <div className="flex flex-col space-y-20">
          <div className="text-center relative">
            <h2 className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-purple-500 text-white text-2xl font-semibold rounded-full mb-6 relative z-10 transform hover:scale-105 transition-transform duration-300">
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
              We're Here to Ease Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">
                Financial Obstacles
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
              Embark on a journey with PrimeWealth. We understand that
              navigating the complexities of finance can be challenging, and
              that is why we are dedicated to providing you with tailored
              solutions that alleviate your financial obstacles.
            </p>
          </div>
          <div className="bg-white shadow-2xl rounded-2xl p-12 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ywllow-400 to-blue-500"></div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                How We Can Help
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Consult with Us",
                  description:
                    "Schedule a consultation to discuss your unique financial needs. Our experts will work closely with you to analyze your situation and provide personalized guidance and solutions.",
                  icon: <Briefcase className="w-10 h-10 text-white" />,
                  color: "from-green-400 to-green-600",
                },
                {
                  title: "Visit Our Office",
                  description:
                    "Step into our office to experience personalized service. Our doors are open, and we welcome you to discuss your financial goals in person. Let us work together to shape a prosperous future.",
                  icon: <MapPin className="w-10 h-10 text-white" />,
                  color: "from-blue-400 to-blue-600",
                },
                {
                  title: "Contact Us",
                  description:
                    "Reach out to us directly. Our team is ready to assist you with any inquiries or concerns. Your financial journey begins with a simple conversation.",
                  icon: <Phone className="w-10 h-10 text-white" />,
                  color: "from-purple-400 to-purple-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start space-y-6 p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg group"
                >
                  <div
                    className={`bg-gradient-to-r ${item.color} p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className={`flex items-center text-${
                      item.color.split("-")[1]
                    }-500 hover:text-${
                      item.color.split("-")[1]
                    }-700 transition-colors duration-300 group`}
                  >
                    Learn More{" "}
                    <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-semibold rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start Your Financial Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
