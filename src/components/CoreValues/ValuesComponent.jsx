import React from "react";
import { Scale, Award, Lightbulb, Users } from "lucide-react";

const ValuesComponent = () => {
  const values = [
    {
      icon: Scale,
      title: "Integrity",
      description:
        "We believe in unwavering honesty and ethical practices. Our commitment to integrity builds trust with clients, partners, and colleagues, forming the bedrock of our long-lasting relationships.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Excellence is not just a goal, it's our standard. We continuously refine our skills and processes to deliver exceptional results that exceed expectations and set new industry benchmarks.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Innovation is the engine of our growth. We encourage creative thinking and embrace cutting-edge technologies to develop groundbreaking solutions that address complex challenges.",
    },
    {
      icon: Users,
      title: "Team",
      description:
        "Our strength lies in our unity. We foster a collaborative environment where diverse talents come together, ideas flourish, and collective efforts drive remarkable achievements.",
    },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-yellow-300 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
          VALUES
        </div>
        <h1 className="text-4xl font-bold mb-6">Our Values</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mission</h2>
          <p className="text-gray-600">
            To provide top-notch professional services to our clients and
            surpass the expectations of all our stakeholders
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Vision</h2>
          <p className="text-gray-600">
            To be a world-class solution provider of professional services in
            accounting, audit and taxation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <value.icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesComponent;
