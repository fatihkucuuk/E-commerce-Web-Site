import "./Policy.css";
import { useTranslation } from "react-i18next";

const Policy = () => {
  const { t } = useTranslation();
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>{t('policy.freedelivery')}</strong>
              <span>{t('policy.freedelivery')}</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong>{t('policy.support')}</strong>
              <span>{t('policy.support2')}</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong>{t('policy.return')}</strong>
              <span>{t('policy.return2')}</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong>{t('policy.payment')}</strong>
              <span>{t('policy.payment2')}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
