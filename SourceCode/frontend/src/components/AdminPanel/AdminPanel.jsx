import React, { useState } from 'react';
import './AdminPanel.css'; // Stil dosyası
import AddProductContent from './AddProduct/AddProduct';
import UpdateProduct from './UpdateProduct/UpdateProduct';
import DeleteProduct from './DeleteProduct/DeleteProduct';
import SaveProduct from './SaveProduct/SaveProduct';
import AddAdmin from './AddAdmin/AddAdmin';
import AnswerQuestion from './AnswerQuestions/AnswerQuestion';

const AdminPanel = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Ürün Ekleme");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="admin-panel-container">
      <div className="menu-container">
        <div className="menu-title">ADMIN PANEL</div>
        <ul className="menu-list">
          <li className={`menu-item ${selectedMenuItem === 'Ürün Ekle' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Ürün Ekleme')} id="addProduct">Ürün Ekleme</li>
          <li className={`menu-item ${selectedMenuItem === 'Ürün Güncelle' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Ürün Güncelleme')}id="updateProduct">Ürün Güncelleme</li>
          <li className={`menu-item ${selectedMenuItem === 'Ürün Sil' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Ürün Silme')}id="deleteProduct">Ürün Silme</li>
          <li className={`menu-item ${selectedMenuItem === 'Silinen Ürünler' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Silinen Ürünler')}id="saveProduct">Silinen Ürünler</li>
          <li className={`menu-item ${selectedMenuItem === 'Admin Kullanıcısı Ekle' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Admin Kullanıcısı Ekleme')}id="addAdmin">Admin Kullanıcısı Ekleme</li>
          <li className={`menu-item ${selectedMenuItem === 'Soru Cevaplama' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Soru Cevaplama')}id="answerQuestion">Soru Cevaplama</li>
        </ul>
      </div>
      <div className="content-container">
        {selectedMenuItem === 'Ürün Ekleme' && (
          <AddProductContent />
        )}
        {selectedMenuItem === 'Ürün Güncelleme' && (
          <div className="content-item"><UpdateProduct /></div>
        )}
        {selectedMenuItem === 'Ürün Silme' && (
          <div className="content-item"><DeleteProduct /></div>
        )}
        {selectedMenuItem === 'Silinen Ürünler' && (
          <div className="content-item"><SaveProduct /></div>
        )}
        {selectedMenuItem === 'Admin Kullanıcısı Ekleme' && (
          <div className="content-item"><AddAdmin /></div>
        )}
        {selectedMenuItem === 'Soru Cevaplama' && (
          <div className="content-item"><AnswerQuestion /></div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
