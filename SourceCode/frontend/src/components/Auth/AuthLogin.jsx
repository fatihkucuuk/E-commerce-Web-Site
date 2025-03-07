import Login from "./Login";
import "./Auth.css";

const AuthLogin = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Login />
        </div>
      </div>
    </section>
  );
};

export default AuthLogin;
