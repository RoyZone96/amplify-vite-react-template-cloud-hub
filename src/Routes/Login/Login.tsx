import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import  API  from "aws-amplify";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const loginData = {
        query: `
          mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              token
              user {
                id
                email
              }
            }
          }
        `,
        variables: {
          email,
          password,
        },
      };

      const response = await API.graphql(loginData);
      const { data }: any = response;

      if (data?.login?.token) {
        console.log("Login successful:", data);
        // Save token to localStorage or context and redirect
      } else {
        throw new Error("Login failed");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
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