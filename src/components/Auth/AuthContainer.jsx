import React, { useState } from "react";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import "./Auth.css";
import CodeAntLogo from "../CodeAntLogo/CodeAntLogo.jsx";

const AuthContainer = () => {
  const [activeTab, setActiveTab] = useState("SignIn");

  return (
    <div className="auth-container">
      
      <div className="auth-heading">
        <CodeAntLogo text ="CodeAnt AI"/>
        <p>Welcome to CodeAnt AI</p>
      </div>
      <div className="auth-tabs">
        <button
          className={activeTab === "SignIn" ? "active" : ""}
          onClick={() => setActiveTab("SignIn")}
        >
          SAAS
        </button>
        <button
          className={activeTab === "SignUp" ? "active" : ""}
          onClick={() => setActiveTab("SignUp")}
        >
          Self Hosted
        </button>
      </div>
      {activeTab === "SignIn" ? <SignIn /> : <SignUp />}
      <p className="auth-footer">By signing up you agree to the <span>Privacy Policy</span>.</p>
    </div>
  );
};

export default AuthContainer;
