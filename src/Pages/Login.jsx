import React, { useState } from "react";
import "./Login.css";
import consola from "/images/consolapro.png";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,16}$/;
    return pattern.test(password);
  };

  const validateName = (name) => {
    return name.trim() !== "";
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setIsValidName(validateName(newName));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
    setIsEmailSent(false);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword && isValidName) {
      setIsEmailSent(true);
      setEmail("");
      setPassword("");
      setName("");
      navigate("/home");
    }
  };

  const switchToSignUp = () => {
    setIsLoginScreen(false);
  };

  return (
    <div className="container-bg">
      <div className="container-login">
        <img src={consola} alt="consola" />
        <div className="form-box">
          <form action="#" onSubmit={handleFormSubmit}>
            {isLoginScreen ? (
              <div className="form-value">
                <h2>Login</h2>
                <div className="inputbox">
                  <input
                    type="email"
                    value={email}
                    id="email"
                    placeholder="email@example.com"
                    onChange={handleEmailChange}
                  />
                  {email &&
                    (isValidEmail ? (
                      <FaCheckCircle className="check-icon green-icon" />
                    ) : (
                      <FaTimesCircle className="check-icon red-icon" />
                    ))}
                </div>
                <div className="inputbox">
                  <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={handlePasswordChange}
                  />
                  {password &&
                    (isValidPassword ? (
                      <FaCheckCircle className="check-icon green-icon" />
                    ) : (
                      <FaTimesCircle className="check-icon red-icon" />
                    ))}
                </div>
                <div className="forget">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <label htmlFor="">
                    <a href="#">
                      <b>Forgot password?</b>
                    </a>
                  </label>
                </div>
                <button
                  className="login"
                  disabled={!isValidEmail || !isValidPassword}
                >
                  Confirm
                </button>
              </div>
            ) : (
              <div className="form-value">
                <h2>Sign up</h2>
                <div className="inputbox">
                  <input
                    type="text"
                    value={name}
                    id="name"
                    placeholder="name"
                    onChange={handleNameChange}
                  />
                </div>
                <div className="inputbox">
                  <input
                    type="email"
                    value={email}
                    id="email"
                    placeholder="email@example.com"
                    onChange={handleEmailChange}
                  />
                  {email &&
                    (isValidEmail ? (
                      <FaCheckCircle className="check-icon green-icon" />
                    ) : (
                      <FaTimesCircle className="check-icon red-icon" />
                    ))}
                </div>
                <div className="inputbox">
                  <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={handlePasswordChange}
                  />
                  {password &&
                    (isValidPassword ? (
                      <FaCheckCircle className="check-icon green-icon" />
                    ) : (
                      <FaTimesCircle className="check-icon red-icon" />
                    ))}
                </div>

                <button
                  className="login"
                  disabled={!isValidEmail || !isValidPassword}
                  // onClick={() => setRegistrationSuccess(true)}
                >
                  Confirm
                </button>
              </div>
            )}

            {isLoginScreen ? (
              <div className="register">
                <p>Don't have an account?</p>
                <a onClick={switchToSignUp}>
                  <b>Sign up</b>
                </a>
              </div>
            ) : (
              <div className="register">
                <p>Already have an account?</p>
                <a onClick={() => setIsLoginScreen(true)}>
                  <b>Login</b>
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
