import React from "react";
import ReusableHero from "../../components/Hero/ReusableHero";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import OurIndustry from "../../components/ReusableComponents/OurIndustry";
import OurServices from "../../components/ReusableComponents/OurServices";

const Services = () => {
  return (
    <>
      <ReusableHero
        title="Comprehensive Financial Solutions"
        subText="Explore our wide range of services designed to meet your unique financial needs and propel your success."
      ></ReusableHero>
      <OurServices></OurServices>
      <OurIndustry></OurIndustry>
      <Contact></Contact>

      <Footer />
    </>
  );
};

export default Services;
