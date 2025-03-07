import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      category: '',
      price: '',
      gender: '',
      color: '',
      stock: '',
      image1: '',
      image2: '',
    });
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
  
    const handleProductSelect = (product) => {
      setSelectedProduct(product);
      setFormData(product);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`${apiUrl}/api/admin/update-products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          message.success('Ürün başarıyla güncellendi.');
          const updatedProduct = await response.json();
          setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
          setSelectedProduct(null);
        } else {
          message.error('Ürün güncelleme işlemi başarısız oldu.');
        }
      } catch (error) {
        console.error('Ürün güncellenirken bir hata oluştu:', error);
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
              <th>Güncelle</th>
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
                  <button onClick={() => handleProductSelect(product)} className="btn btn-primary" id={`product-${product.id}`}>Güncelle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedProduct && (
          <div className="update-form">
            <h2 className="form-title">Ürün Güncelle</h2>
            <form className="product-form" onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="name">Ürün Adı:</label>
                <input type="text" id="updateName" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="category">Kategori:</label>
                <input type="text" id="updateCategory" name="category" value={formData.category} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="price">Fiyat:</label>
                <input type="number" id="updatePrice" name="price" value={formData.price} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Cinsiyet:</label>
                <input type="text" id="updateGender" name="gender" value={formData.gender} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="color">Renk:</label>
                <input type="text" id="updateColor" name="color" value={formData.color} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="stock">Stok:</label>
                <input type="number" id="updateStock" name="stock" value={formData.stock} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="image1">Görsel 1:</label>
                <input type="text" id="updateImage1" name="image1" value={formData.image1} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="image2">Görsel 2:</label>
                <input type="text" id="updateImage2" name="image2" value={formData.image2} onChange={handleInputChange} required />
              </div>
              <button type="submit" id="updateProduct" className="btn btn-primary">Güncelle</button>
            </form>
          </div>
        )}
      </div>
    );
  };

export default UpdateProduct;
