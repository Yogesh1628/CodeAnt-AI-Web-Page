
import React from 'react';
import StatsCard from '../components/StatsCard/StatsCard';
import AuthContainer from '../components/Auth/AuthContainer';
import './LoginScreen.css';
import BigLogo from '../assets/BigLogo.png'

function LoginScreen() {
  return (
    <div className="app">
      <div className="stats-section">
        <StatsCard />
      </div>
      <div className="logo-container">
        <img src={BigLogo} alt="Logo" className="logo-image" />
      </div>
        <AuthContainer />
    </div>


  );
}

export default LoginScreen;