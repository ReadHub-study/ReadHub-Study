import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "./validate";
import { ReadHubImages } from "../../assets/asset";
import axiosConfig from "../../Util/axiosConfig";
import { apiEndpoints } from "../../Util/apiEndpoints";
import { LuLoaderCircle } from "react-icons/lu";

const Login = () => {
  const navigate = useNavigate();

  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password");
      return;
    }
    
    setError("");
    setLoading(true);

    try {
      const response = await axiosConfig.post(apiEndpoints.LOGIN, {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      // Store tokens in localStorage
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      setLoading(false);
      navigate("/home");
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data.message || "Authentication failed. Please check your credentials.");
      } else if (err.request) {
        setError("Network error. Please try again later.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div className="signup">
        <div className="signupContent">
          <div className="header">
            <span className="heading">Welcome Back</span>
            <span className="subheading">Continue your reading journey</span>
          </div>

          <form onSubmit={handleSubmit} className="signupForm">
            <div className="inputFields">
              <div className="field">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="field">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="********"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div style={{ justifyContent: "end", marginLeft: "12rem" }}>
                <span
                  style={{ color: "#2d7ff9" }}
                  onClick={() => navigate("/forgotpassword")}
                >
                  Forgot Password?
                </span>
              </div>

              {error && (
                <p
                  className="errorText"
                  style={{
                    color: "red",
                    alignItems: "center",
                    backgroundColor: "none",
                  }}
                >
                  {error}
                </p>
              )}

              <button
            disabled={loading}
              className={`btn-primary w-full py-3 text-lg font-medium flex items-center justify-center gap-2 ${loading ? 'opacity-60 cursor-not-allowed': ''}`}
              type="submit"
            >
              {loading ? (
                <>
                <LuLoaderCircle className="animate-spin w-4 h-4"/>
                Signing In...
                </>
              ): (
                "Sign In"
              )}
            </button>

              <div className="separator">
                <hr className="short-line" />
                <span>Or continue with</span>
                <hr className="short-line" />
              </div>

              <div className="icons">
                <span>
                  <img
                    className="googleImg"
                    src={ReadHubImages.GoogleIcon}
                    alt="Google login"
                  />
                </span>
                <span>
                  <img
                    className="googleImg"
                    src={ReadHubImages.AppleIcon}
                    alt="Apple login"
                  />
                </span>
              </div>

              <div className="loginOption">
                <span style={{ color: "#4d4d4d" }}>
                  Already have an account?
                </span>
                <span
                  onClick={() => navigate("/signup")}
                  style={{ color: "#2D7FF9" }}
                >
                  Sign Up
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
