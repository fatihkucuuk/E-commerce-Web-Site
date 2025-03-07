import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUser } from "../../context/UserContext";

import "./Login.css"

const Login = () => {
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
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login response data:', data); // Backend'den gelen yanıtı kontrol edin
        login({ username: formData.username, token: data.token, role: data.role });
        message.success('Giriş başarılı.');
      } else {
        message.error('Giriş başarısız.');
      }
    } catch (error) {
      console.log('Giriş hatası:', error);
    }
  };

  return (
    <div className="account-column">
      <h2>{t('user.login.login')}</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <span>
              {t('user.login.username')} <span className="required">*</span>
            </span>
            <input type="text" name="username" id="loginUsername" onChange={handleInputChange} required />
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
              id="loginPassword"
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
          <button className="btn btn-sm" id="loginButton">{t('user.login.login')}</button>
        </p>
        <a href="#" className="form-link">
          {t('user.login.lostyourpassword')}
        </a>
      </form>
    </div>
  );
};

export default Login;
