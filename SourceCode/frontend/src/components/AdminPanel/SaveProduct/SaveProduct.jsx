import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import './SaveProduct.css'; // Stil dosyası

const SaveProduct = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPassiveProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/passive-products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error('Silinen ürünler yüklenirken bir hata oluştu.');
        }
      } catch (error) {
        console.error('Silinen ürünler yüklenirken bir hata oluştu:', error);
        message.error('Silinen ürünler yüklenirken bir hata oluştu.');
      }
    };

    fetchPassiveProducts();
  }, []);

  const handleRestore = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/admin/restore-product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
      });

      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
        message.success('Ürün başarıyla geri yüklendi.');
      } else {
        message.error('Ürün geri yükleme işlemi başarısız oldu.');
      }
    } catch (error) {
      console.error('Ürün geri yüklenirken bir hata oluştu:', error);
      message.error('Ürün geri yüklenirken bir hata oluştu.');
    }
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Silinen Ürünler</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ürün Adı</th>
            <th>Kategori</th>
            <th>Fiyat</th>
            <th>Cinsiyet</th>
            <th>Renk</th>
            <th>Stok</th>
            <th>Görsel 1</th>
            <th>Görsel 2</th>
            <th>Kurtar</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.gender}</td>
              <td>{product.color}</td>
              <td>{product.stock}</td>
              <td>{product.image1}</td>
              <td>{product.image2}</td>
              <td>
                <button className="restore-button" id={`product/${product.id}`} onClick={() => handleRestore(product.id)}>Kurtar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaveProduct;
