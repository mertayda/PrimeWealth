import React from "react";
import ReusableHero from "../../components/Hero/ReusableHero";
import Footer from "../../components/Footer/Footer";
import Clients from "../../components/Clients/Clients";
import OurPurpose from "../../components/ReusableComponents/OurPurpose";
import WhyJoinUs from "../../components/ReusableComponents/WhyJoinUs";
import CareerStageSection from "../../components/JobApplication/CareerStageSection";
import Quote from "../../components/JobApplication/Quote";

const Career = () => {
  return (
    <div>
      <ReusableHero
        title="Forge Your Path to Success"
        subText="Explore rewarding opportunities and join a team dedicated to innovation, growth, and professional development."
      ></ReusableHero>
      <WhyJoinUs></WhyJoinUs>
      <CareerStageSection></CareerStageSection>
      <Quote></Quote>
      <Footer></Footer>
    </div>
  );
};

export default Career;
