import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Kayıt başarılı.");
        navigate("/");
      } else {
        const errorText = await response.text();
        console.log("Kayıt başarısız:", errorText);
        message.error("Kayıt başarısız: " + errorText); 
      }
    } catch (error) {
      console.log("Kayıt hatası:", error);
      message.error("Kayıt sırasında bir hata oluştu.");
    }
  };
  
  return (
    <div className="account-column">
      <h2>{t('user.register.register')}</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            <span>
            {t('user.register.username')} <span className="required">*</span>
            </span>
            <input type="text" id="registerUsername" onChange={handleInputChange} name="username" required />
          </label>
        </div>
        <div>
          <label>
            <span>
            {t('user.register.email')} <span className="required">*</span>
            </span>
            <input type="email" id="registerEmail" onChange={handleInputChange} name="email" required />
          </label>
        </div>
        <div>
          <label>
            <span>
            {t('user.register.password')} <span className="required">*</span>
            </span>
            <input
              type="password"
              id="registerPassword"
              onChange={handleInputChange}
              name="password"
              required
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
          {t('user.register.text')}
          </p>
          <button className="btn btn-sm" id="registerButton">{t('user.register.register')}</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
