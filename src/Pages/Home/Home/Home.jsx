import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import Benefits from "../Benefits/Benefits";
import BeMerchent from "../BeMerchent/BeMerchent";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientLogosMarquee></ClientLogosMarquee>
      <Benefits></Benefits>
      <BeMerchent></BeMerchent>
    </div>
  );
};

export default Home;
