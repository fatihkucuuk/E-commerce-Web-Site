import React, { useState, useEffect } from 'react';
import './AddAdmin.css';
import { message } from 'antd';

const AddAdmin = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [admins, setAdmins] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/admin/add-admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newAdmin = await response.json();
        message.success('Admin başarıyla eklendi.');
        setAdmins([...admins, newAdmin]);
        setFormData({ username: '', email: '', password: '' });
      } else {
        message.error('Admin ekleme işlemi başarısız oldu.');
      }
    } catch (error) {
      console.error('Admin eklenirken bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/users', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
      }
    })
      .then(response => response.json())
      .then(data => setAdmins(data.filter(user => user.role === 'ADMIN')))
      .catch(error => console.error('Adminler yüklenirken bir hata oluştu:', error));
  }, []);

  return (
    <div className="add-admin-container">
      <div className="form-container">
        <h2 className="form-title">Admin Kullanıcısı Ekle</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı:</label>
            <input type="text" id="adminUsername" name="username" value={formData.username} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="adminEmail" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre:</label>
            <input type="password" id="adminPassword" name="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <button type="submit" id="addAdminButton" className="btn btn-primary">Admin Ekle</button>
        </form>
      </div>
      <div className="list-container">
        <h2>Mevcut Adminler</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Kullanıcı Adı</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {admins.map(admin => (
              <tr key={admin.id}>
                <td>{admin.username}</td>
                <td>{admin.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddAdmin;
