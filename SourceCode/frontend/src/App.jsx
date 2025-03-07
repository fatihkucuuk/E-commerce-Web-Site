import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import "./App.css";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminRoute from "./routes/AdminRoute";
import AdminPanelPage from "./pages/AdminPanelPage";
import MyOrderPage from "./pages/MyOrderPage";
import ProductDetail from "./components/Products/ProductsDetail/ProductDetail";
import UserProfilePage from "./pages/UserProfilePage";


function App() {

  return (
    <UserProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/products" element={<ProductPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />}/>
      <Route path="/admin-panel" element={
          <AdminRoute>
            <AdminPanelPage />
          </AdminRoute>
        } />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/my-account" element={<UserProfilePage />} />
      <Route path="/my-orders" element={<MyOrderPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </UserProvider>
  );

}

export default App;


