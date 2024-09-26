import React from "react";
import ReusableHero from "../../components/Hero/ReusableHero";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/ReusableComponents/AboutUs";
import OurPurpose from "../../components/ReusableComponents/OurPurpose";
import CoreValues from "../../components/CoreValues/ValuesComponent";

import OurStory from "../../components/Story/OurStory";

const About = () => {
  return (
    <div className="min-h-screen font-playfair">
      <ReusableHero
        title="Welcome to Our Story"
        subText="Discover the journey, values, and people that make PrimeWealth a trusted partner in your financial success."
      ></ReusableHero>
      <AboutUs></AboutUs>
      <CoreValues></CoreValues>
      <OurPurpose></OurPurpose>
      <OurStory></OurStory>

      <Footer></Footer>
    </div>
  );
};

export default About;
