import React, { createContext, useContext, useState, useEffect } from 'react';
import { Role } from '../constants/Role';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('username', userData.username);
    localStorage.setItem('jwtToken', userData.token);
    localStorage.setItem('role', userData.role);
    setIsAdmin(userData.role === Role.ADMIN);
    navigate('/'); // Anasayfaya yönlendir
    window.location.reload();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwtToken'); // Logout işleminde token'ı kaldır
    localStorage.removeItem('username'); // Kullanıcı adını kaldır
    localStorage.removeItem('role'); // Rol bilgisini kaldır
    navigate('/login'); // Giriş sayfasına yönlendir
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    if (token && username && role) {
      setUser({ username, role });
      setIsAdmin(role === Role.ADMIN);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
