import React, { useState } from 'react';
import '../AdminPanel.css'; // Stil dosyası
import './AddProduct.css';
import { message } from 'antd';

const AddProductContent = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    gender: '',
    color: '',
    stock: '',
    image1: '',
    image2: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${apiUrl}/api/admin/add-products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` // Eğer JWT kullanıyorsanız
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        message.success('Ürün başarıyla eklendi.');
        console.log('Ürün başarıyla eklendi!');
        // Ürünün başarıyla eklendiğini gösteren bir mesaj veya başka bir işlem yapabilirsiniz
      } else {
        message.error('Ürün ekleme işlemi başarısız oldu.');
        console.error('Ürün ekleme işlemi başarısız oldu.');
        // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz
      }
    } catch (error) {
      console.error('Ürün eklenirken bir hata oluştu:', error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz
    }
  };

  return (
    <div className="content-item">
      <h2 className="form-title">Ürün Ekle</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ürün Adı:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Kategori:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Fiyat:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Cinsiyet:</label>
          <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="color">Renk:</label>
          <input type="text" id="color" name="color" value={formData.color} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stok:</label>
          <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="image1">Görsel 1:</label>
          <input type="text" id="image1" name="image1" value={formData.image1} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="image2">Görsel 2:</label>
          <input type="text" id="image2" name="image2" value={formData.image2} onChange={handleInputChange} required />
        </div>
        <button type="submit" id="addProductButton" className="btn btn-primary">Ürün Ekle</button>
      </form>
    </div>
  );
};

export default AddProductContent;
