import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      {/* Toggle buttons */}
      <div className="auth-toggle">
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          login
        </button>
        <button
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          signup
        </button>
      </div>

      {/* Card */}
      <div className="auth-card">
        <div className="logo">🍒</div>
        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

        <form>
          {/* Signup extra field */}
          {!isLogin && (
            <div className="input-box">
              <input type="text" placeholder="Your Name" required />
            </div>
          )}

          <div className="input-box">
            <input type="email" placeholder="you@yourmail.com" required />
          </div>

          {!isLogin && (
            <div className="input-box">
              <input type="password" placeholder="Create password" required />
            </div>
          )}

          {isLogin && (
            <div className="actions">
              <button type="submit" className="next-btn">
                Next ➜
              </button>
              <a href="#">forgot password</a>
            </div>
          )}

          {!isLogin && (
            <div className="actions">
              <button type="submit" className="next-btn">
                Sign Up ➜
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Bottom wave */}
      <div className="wave"></div>
    </div>
  );
};

export default Auth;