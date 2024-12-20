import React from 'react';
import AuthButtons from './AuthButtons/AuthButtons';
import GithubLogo from '../../assets/GithubLogo.png'
import BitBucketLogo from '../../assets/BitBucketLogo.png'
import AzureLogo from '../../assets/AzureLogo.png'
import GitlabLogo from '../../assets/GitlabLogo.png'

const SignIn = () => {
  return (
    <div className="auth-content">
      <AuthButtons symbol = {GithubLogo} text = "Sign in with Github"/>
      <AuthButtons symbol = {BitBucketLogo} text = "Sign in with Bitbucket"/>
      <AuthButtons symbol = {AzureLogo} text = "Sign in with Azure Devops"/>
      <AuthButtons symbol = {GitlabLogo} text = "Sign in with GitLab"/>
    </div>
  );
};

export default SignIn;
