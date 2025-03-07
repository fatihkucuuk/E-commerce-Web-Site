import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import './DeleteProduct.css';
import { BsTrashFill } from 'react-icons/bs';

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`, {
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
          message.error('Ürünler yüklenirken bir hata oluştu.');
        }
      } catch (error) {
        console.error('Ürünler yüklenirken bir hata oluştu:', error);
        message.error('Ürünler yüklenirken bir hata oluştu.');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/admin/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
      });

      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
        message.success('Ürün başarıyla silindi.');
      } else {
        message.error('Ürün silme işlemi başarısız oldu.');
      }
    } catch (error) {
      console.error('Ürün silinirken bir hata oluştu:', error);
      message.error('Ürün silinirken bir hata oluştu.');
    }
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Ürünler</h2>
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
            <th>Sil</th>
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
                <BsTrashFill 
                  className="delete-icon"
                  id={`product${product.id}`} 
                  onClick={() => handleDelete(product.id)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteProduct;
