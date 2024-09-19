import React, { useState } from "react";
import '../assets/css/Login.css';  // Eğer CSS ayrı bir dosyada olacaksa
import logo from "../assets/logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit işlemleri buraya yazılabilir
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header block ">
          <img src={logo} alt="Logo" className="size-10 mb-5" />
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">Sign in</button>
        </form>
        <div className="create-account">
          <p>Already have an account? <a href="/signup">Sign in to your account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
