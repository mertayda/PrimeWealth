import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cfo from "../../assets/images/cfo.svg";
import audit from "../../assets/images/audit.svg";
import tax from "../../assets/images/tax.svg";
import consulting from "../../assets/images/consulting.svg";

const ServiceCard = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl font-playfair relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mr-4" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowRight className="text-[#4EAF4E]" />
      </motion.div>
    </motion.div>
  );
};

const OurServices = () => {
  const services = [
    {
      icon: audit,
      title: "Audit & Assurance",
      description:
        "Enhance your financial reporting system and make informed decisions.",
    },
    {
      icon: consulting,
      title: "Consulting",
      description:
        "Solve complex business issues and optimize your internal processes.",
    },
    {
      icon: tax,
      title: "Tax Advisory",
      description:
        "Ensure tax compliance without hindering your core business activities.",
    },
    {
      icon: cfo,
      title: "CFO Services",
      description:
        "Access a team of professional CFOs with cross-industry experience.",
    },
  ];

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-playfair">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="relative inline-block mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-[#4EAF4E] transform -skew-x-12"></div>
            <h2 className="relative text-2xl font-semibold text-white py-1 px-4 uppercase tracking-wide">
              Services
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-900 text-4xl sm:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get Control over{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">
              your Business
            </span>
          </motion.p>
          <motion.p
            className="text-xl font-bold text-[#DAA520]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let us take your finances to the next level
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
  );
};

export default OurServices;
