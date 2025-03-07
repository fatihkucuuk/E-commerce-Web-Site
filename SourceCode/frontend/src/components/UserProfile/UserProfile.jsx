import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { message } from 'antd';
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        setFormData({
          email: response.data.email,
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error);
      }
    };

    if (user && user.username) {
      fetchUserProfile();
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      message.error('Şifreler uyuşmuyor.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/user/update-profile', {
        email: formData.email,
        password: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
      });
      if (response.status === 200) {
        message.success('Profil başarıyla güncellendi.');
      } else {
        message.error('Profil güncelleme işlemi başarısız oldu.');
      }
    } catch (error) {
      console.error('Profil güncellenirken bir hata oluştu:', error);
      message.error('Profil güncellenirken bir hata oluştu.');
    }
  };

  if (!user) {
    return <div>Lütfen giriş yapın.</div>;
  }

  return (
    <div className="user-profile-container">
      <h2>Hesabım</h2>
      <form className="user-profile-form" onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Yeni Şifre:</label>
          <input type="password" id="newPassword" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Şifreyi Onayla:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary" id="updateButton">Güncelle</button>
      </form>
    </div>
  );
};

export default UserProfile;
