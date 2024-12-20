import React from "react";
import './CodeAntLogo.css'
import Logo from '../../assets/codeAnt Logo.png'
function CodeAntLogo({text}) {
  return (
    <div className="logo">
      <img src={Logo} />
      <p id="satisho-text">{text}</p>
    </div>
  );
}

export default CodeAntLogo;
