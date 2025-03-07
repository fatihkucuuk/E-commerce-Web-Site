import AdminLogin from "./AdminLogin";
import "./Auth.css";

const AuthAdminLogin = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <AdminLogin />
        </div>
      </div>
    </section>
  );
};

export default AuthAdminLogin;
