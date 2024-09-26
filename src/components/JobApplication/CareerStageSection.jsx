import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Briefcase } from "lucide-react";
import hero from "../../assets/icons/hero.webp";
import Phycical from "../../assets/icons/Physical.webp";
import professional from "../../assets/icons/professional.webp";
import Discussion from "../../assets/icons/Discussion.webp";
import Employable from "../../assets/icons/Employable.webp";
import emotional from "../../assets/icons/emotional.webp";
import Financial from "../../assets/icons/Financial.webp";
import Rational from "../../assets/icons/Rational.webp";
import Purposeful from "../../assets/icons/Purposeful.webp";
import students from "../../assets/icons/students.webp";
import app from "../../assets/icons/app.webp";

const CareerStageSection = () => {
  const careerStages = [
    {
      title: "Students",
      description:
        "As a student, you'll have opportunities to learn, grow, and make an impact. Join us to kickstart your career journey.",
      img: students,
      benefits: ["Internship programs", "Mentorship", "Skill workshops"],
    },
    {
      title: "Apprenticeships",
      description:
        "Our apprenticeship programs offer hands-on experience and mentorship to help you build a strong foundation for your career.",
      img: Rational,
      benefits: [
        "Hands-on training",
        "Industry certifications",
        "Career coaching",
      ],
    },
    {
      title: "Early career professionals",
      description:
        "You're our future leaders. Bring your skills and passion to work with the latest technology to solve for some of the world's biggest challenges.",
      img: Discussion,
      benefits: [
        "Leadership training",
        "Innovation projects",
        "Global opportunities",
      ],
    },
    {
      title: "Experienced professionals",
      description:
        "Take your career to the next level. Your expertise will drive innovation and shape the future of our industry.",
      img: professional,
      benefits: [
        "Advanced specializations",
        "Industry influence",
        "Strategic roles",
      ],
    },
    {
      title: "Executive leaders",
      description:
        "Lead the way in shaping our strategy and driving our organization forward. Your vision will inspire and guide our teams to new heights.",
      img: Employable,
      benefits: [
        "Board involvement",
        "Strategic partnerships",
        "Thought leadership",
      ],
    },
  ];
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-900  to-green-900 z-0 animate-gradient p-8 md:p-16 text-white font-playfair min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl  font-bold mb-12 text-center text-white"
      >
        Your Journey{" "}
        <span className=" text-transparent bg-clip-text  bg-gradient-to-r from-yellow-300 to-yellow-600">
          {" "}
          Starts Here{" "}
        </span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0"
        >
          {careerStages.map((stage, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveStage(index)}
              className={`text-xl mb-6 cursor-pointer transition-all duration-300 flex items-center p-4 rounded-lg ${
                index === activeStage
                  ? "bg-white bg-opacity-20 text-yellow-300 font-semibold"
                  : "text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className="mr-3" size={20} />
              {stage.title}
              {index === activeStage && (
                <ChevronRight className="ml-auto" size={20} />
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lg:w-2/3 mt-8 lg:mt-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              className="bg-white bg-opacity-10 rounded-lg p-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={careerStages[activeStage].img}
                alt={careerStages[activeStage].title}
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {careerStages[activeStage].title}
              </motion.h2>
              <motion.p
                className="text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {careerStages[activeStage].description}
              </motion.p>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-3">Key Benefits:</h3>
                <ul className="list-disc list-inside">
                  {careerStages[activeStage].benefits.map((benefit, index) => (
                    <li key={index} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-blue-900 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Opportunities
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerStageSection;
