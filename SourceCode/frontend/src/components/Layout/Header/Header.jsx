import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import React, { useState } from 'react';
import { clickHandle } from "../../../i18n";
import { useTranslation } from "react-i18next";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useUser } from "../../../context/UserContext";



const Header = ({setIsSearchShow}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { user, isAdmin, logout } = useUser();

  console.log("isAdmin:", isAdmin); // Debug için console log
  console.log("User:", user); // Debug için console log
  return (
    <header>
     <ProgressBar />
      <div className="global-notification">
        <div className="container">
          <p>
            {t('header.sale')}
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"}>
                <img src="public\img\logo\logo.png" />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      {t('header.home')}
                    </Link>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/products"} id="productPage"
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      {t('header.products')}
                    </Link>
                    </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"} id="contactPage"
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      {t('header.contact')}
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              
              <div className="header-right-links">
              <div className="header-account">
                <i className="bi bi-person" id="userLogo"></i>
                <div className="dropdown-content">
                    {user ? (
                        <>
                            <span>Hoşgeldiniz, {user.username}</span>
                            <Link to="/my-account" id="myAccountButton">Hesabım</Link>
                            <button onClick={logout}>Çıkış Yap</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" id="loginButtons">Giriş Yap</Link>
                            <Link to="/register" id="registerButtons">Kayıt Ol</Link>
                        </>
                    )}
                </div>
            </div>
                  <Link to={"/my-orders"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                  </Link>
                      
                  {/* Admin kullanıcıları için gösterilecek logo */}
                {isAdmin && (
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary text-white p-2">
                      <Link to={"/admin-panel"} id="adminPanelPage">
                      <i className="bi bi-shield-lock-fill"></i>
                      </Link>
                    </div>
                  </div>
                )}
                                
                  <div className="language-buttons">
                    <button className="language-button" id="trButton" onClick={() => clickHandle('tr')}>TR</button>
                    <span className="vertical-line"></span>
                    <button className="language-button" id="enButton" onClick={() => clickHandle('en')}>EN</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );


}
export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
