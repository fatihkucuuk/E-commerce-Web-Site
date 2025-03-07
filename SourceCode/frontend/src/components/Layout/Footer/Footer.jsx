import React from "react";
import Policy from "../Policy/Policy";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Policy />
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                      {t('footer.footergetemail')}
                    </h3>
                    <p className="subscribe-desc">
                      {t('footer.footergetemaildp')}
                    </p>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input
                        type="text"
                        placeholder={t('footer.enteryouremail')}
                      />
                      <button className="btn">{t('footer.signup')}</button>
                    </form>
                    <p className="privacy-text">
                      {t('footer.agreeterms')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    {t('footer.contactus')} <br />
                    (+90) 541 237 38 57
                  </h3>
                  <p className="contact-desc">
                    {t('footer.available')}
                  </p>
                </div>
                <div className="footer-contact-bottom">
                  <div className="download-app">
                    <a href="#">
                      <img src="/img/footer/app-store.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/footer/google-play.png" alt="" />
                    </a>
                  </div>
                  <p className="privacy-text">
                    <strong>{t('footer.shoppingapp')}:</strong> {t('footer.shoppingapptxt')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <a href="/" className="logo">
                  <img src="public\img\logo\logo.png" />
                  </a>
                </div>
                <div className="footer-desc">
                  <p>
                    {t('footer.ataturk')} <br></br> -M. Kemal Atatürk
                  </p>
                </div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:555 555 55 55">(+90) 541 237 38 57</a> –{" "}
                    <a href="mailto:info@example.com">fatihkucuk@stu.topkapi.edu.tr</a>
                  </p>
                </div>
              </div>
              <div className="widget-nav-menu">
                <h4>Menu</h4>
                <ul className="menu-list">
                  <li>
                    <a href="/">{t('footer.home')}</a>
                  </li>
                  <li>
                    <a href="/products">{t('footer.products')}</a>
                  </li>
                  <li>
                    <a href="/contact">{t('footer.contact')}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>
                  Copyright 2024 © E-Commerce Theme. All right reserved. Powered
                  by Fatih Küçük.
                </p>
              </div>
              <a href="#">
                <img src="/img/footer/cards.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
