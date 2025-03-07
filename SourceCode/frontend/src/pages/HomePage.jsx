import React from "react";
import Sliders from "../components/Slider/Sliders";
import Campaigns from "../components/Campaigns/Campaigns";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";


const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Campaigns />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
