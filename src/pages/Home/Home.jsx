import React from "react";
import HomeHero from "../../components/Hero/HomeHero";
import Clients from "../../components/Clients/Clients";
import AboutUs from "../../components/ReusableComponents/AboutUs";
import OurServices from "../../components/ReusableComponents/OurServices";
import OurStory from "../../components/Story/OurStory";
import GrowithWithOurClients from "../../components/Story/GrowithWithOurClients";
import OurIndustry from "../../components/ReusableComponents/OurIndustry";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <HomeHero />
      <Clients />
      <AboutUs />
      <OurServices />
      <OurStory />
      <GrowithWithOurClients />
      <OurIndustry />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
