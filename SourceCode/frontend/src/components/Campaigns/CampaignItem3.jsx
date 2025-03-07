import "./CampaignItem.css";
import { useTranslation } from "react-i18next";

const CampaignItem = () => {
  const { t } = useTranslation();
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
      {t('home.featured.campaignitem3.text1')}  <br></br>{t('home.featured.campaignitem3.text2')} <br></br> {t('home.featured.campaignitem3.text3')} <br></br> 
      {t('home.featured.campaignitem3.text4')}
      </h3>
      <p className="campaign-desc">
      </p>
      <a href="#" className="btn btn-primary">
      {t('home.featured.viewall')}
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;
