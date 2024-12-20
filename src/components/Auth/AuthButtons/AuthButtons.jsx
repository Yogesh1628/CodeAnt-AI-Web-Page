import React from 'react'
import './AuthButtons.css'
function AuthButtons({symbol, text}) {
  return (
    <div className='auth-button'>
        <img src={symbol} />
        <p>{text}</p>
    </div>
  )
}

export default AuthButtons