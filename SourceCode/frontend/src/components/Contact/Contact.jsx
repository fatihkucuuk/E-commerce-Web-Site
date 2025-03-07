import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.108637686271!2d29.04379241207647!3d41.0228791184055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac81d5bfcea7d%3A0x29e4ef7c40556a8!2s%C4%B0stanbul%20Topkap%C4%B1%20%C3%9Cniversitesi%20Altunizade%20Yerle%C5%9Fkesi!5e0!3m2!1str!2str!4v1710968671010!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>{t('contact.form.contacts')}</h4>
            <h2>{t('contact.form.getintouch')}</h2>
            <p>
            {t('contact.form.desc')}
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                {t('contact.form.name')}
                  <span>*</span>
                </label>
                <input type="text" required id="formName"/>
              </div>
              <div className="">
                <label>
                {t('contact.form.mail')}
                  <span>*</span>
                </label>
                <input type="text" required id="formEmail"/>
              </div>
              <div className="">
                <label>
                {t('contact.form.subject')}
                  <span>*</span>
                </label>
                <input type="text" required id="formSubject"/>
              </div>
              <div className="">
                <label>
                {t('contact.form.message')}
                  <span>*</span>
                </label>
                <textarea
                  id="formMessage"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button" id="sendMailButton">{t('contact.form.button')}</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong>İstanbul Topkapı Üniversitesi Altunizade Kampüs</strong>
                  <p className="contact-street">
                    Altunizade, Kuşbakışı Cd. No:2, 34662 Üsküdar/İstanbul
                  </p>
                  <a href="tel:Phone:+90 850 474 7475">{t('contact.showroom.phone')}: +90 (850) 474 7475</a>
                  <a href="mailto:Email: info@topkapi.edu.tr">
                  {t('contact.showroom.mail')}: info@topkapi.edu.tr
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> {t('contact.showroom.hours')}</strong>
                  <p className="contact-date">{t('contact.showroom.weekdays')}</p>
                  <p>{t('contact.showroom.weekend')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
