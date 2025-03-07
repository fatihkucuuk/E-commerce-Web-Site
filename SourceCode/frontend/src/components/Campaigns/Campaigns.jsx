import CampaignItem from "./CampaignItem";
import CampaignItem2 from "./CampaignItem2";
import CampaignItem3 from "./CampaignItem3";
import CampaignItem4 from "./CampaignItem4";
import "./Campaigns.css";
import { useTranslation } from "react-i18next";

const Campaigns = () => {
  const { t } = useTranslation();
  return (
    
    <section className="campaigns">
      <br></br><br></br><br></br><br></br>
      <center><font size="6">
      <b>{t('home.featured.products')} </b></font> </center>
      <div className="container">
        
        <div className="campaigns-wrapper">
          <CampaignItem />
          <CampaignItem2 />
        </div>
        <div className="campaigns-wrapper">
          <CampaignItem3 />
          <CampaignItem4 />
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
    </section>
  );
};

export default Campaigns;
