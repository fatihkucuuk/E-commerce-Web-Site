import Register from "./Register";
import "./Auth.css";

const AuthRegister = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Register />
        </div>
      </div>
    </section>
  );
};

export default AuthRegister;
