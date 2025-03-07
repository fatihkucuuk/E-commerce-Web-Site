// Unauthorized.js
import React from "react";
import { Link } from "react-router-dom";
import "./Unauthorized.css";

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <h1>403 - Yetkiniz Yok</h1>
      <p>Bu sayfayı görüntüleme yetkiniz bulunmamaktadır.</p>
      <Link to="/">Anasayfaya Dön</Link>
    </div>
  );
};

export default Unauthorized;
