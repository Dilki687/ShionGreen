import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle changes in the email and password fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle traditional login (email/password)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      console.log("Login Success:", data);
      navigate("/admin");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  // Handle Google login success
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const { data } = await axios.post("http://localhost:5000/auth/google", {
        tokenId: credentialResponse.credential,  // Send the token to the backend
      });
  
      console.log("Google Login Success:", data);
  
      // Save token or user data if needed
      localStorage.setItem("token", data.token);
  
      // Navigate to admin page or other pages after login
      navigate("/admin");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <h5 className="text-muted">Or login with:</h5>
        </div>
        <div className="d-flex justify-content-center mt-3">
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={() => console.error("Google Login Error")}
      />
    </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
