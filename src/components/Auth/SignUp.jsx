import React from 'react';
import AuthButtons from './AuthButtons/AuthButtons';
import GitlabLogo from '../../assets/GitlabLogo.png'
import KeyLogo from '../../assets/key.png'
const SignUp = () => {
  return (
    <div className="auth-content">
      <AuthButtons symbol = {GitlabLogo} text = "Self Hosted Gitlab"/>
      <AuthButtons symbol = {KeyLogo} text = "Sign in with SSO"/>
    </div>
  );
};

export default SignUp;
