import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.css";

import { useLogin } from "../hooks/useLogin";
import loginImg from "../images/login.jpg"

const Login = () => {
  const { credentials, handleChange, handleLogin } = useLogin();

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="wrapper-login">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="fas" />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                autoComplete="username"
                autoFocus
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} className="fas"/>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p className="forgot-password">
              <a href="#">Forgot Password?</a>
            </p>
          </form>
        </div>
        <div className="login-banner">
          <h1>Welcome Back!</h1>
          <img
            src={loginImg}
            alt="User"
            loading="lazy"
            className="person-image"
          />
          <p>Login to access your account and manage your dashboard efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
