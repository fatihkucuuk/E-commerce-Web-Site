import "./CampaignSingle.css";
import { useTranslation } from "react-i18next";

const CampaignSingle = () => {
  const { t } = useTranslation();
  return (
    <section className="campaign-single">
    <div className="container">
      <div className="campaign-wrapper">
        <h2>{t('home.campaignsingle.sale')}</h2>
        <strong>{t('home.campaignsingle.sale2')}</strong>
        <span></span>
        <a href="/products" className="btn btn-lg">
        {t('home.campaignsingle.salebtn')}
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
  )
}

export default CampaignSingle