import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="register-link">
        Don't have an account?{" "}
        <NavLink to="/signup" className="signup-link">
          Register here
        </NavLink>
      </p>
    </div>
  );
};

export default Login;