import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUser } from "../../context/UserContext";

const AdminLogin = () => {
  const { t } = useTranslation();
  const { login } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      username: '',
      password: ''
  });
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
      e.preventDefault();
      const credentials = {
          username: formData.username,
          password: formData.password
      };
      try {
          const response = await fetch(`${apiUrl}/api/admin/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(credentials)
          });

          if (response.ok) {
              const data = await response.json();
              console.log('Admin login response data:', data); // Backend'den gelen yanıtı kontrol edin
              localStorage.setItem('username', formData.username);
              localStorage.setItem('jwtToken', data.token); 
              localStorage.setItem('role', data.role);           
              login({ username: formData.username, token: data.token, role: data.role });
              message.success('Giriş başarılı.');
              navigate('/');
          } else {
              message.error('Giriş başarısız.');
          }
      } catch (error) {
          console.log('Giriş hatası:', error);
      }
  };

  return (
    <div className="account-column">
      <h2>Admin Girişi</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <span>
            {t('user.login.username')} <span className="required">*</span>
            </span>
            <input type="text" id="adminUsername" name="username" onChange={handleInputChange} required />
          </label>
        </div>
        <div>
          <label>
            <span>
            {t('user.login.password')} <span className="required">*</span>
            </span>
            <input
              type="password"
              name="password"
              id="adminPassword"
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>{t('user.login.rememberme')}</span>
          </label>
          <button className="btn btn-sm" id="adminLoginButton">{t('user.login.login')}</button>
        </p>
        <a href="#" className="form-link">
        {t('user.login.lostyourpassword')}
        </a>
      </form>
    </div>
  );
};

export default AdminLogin;
