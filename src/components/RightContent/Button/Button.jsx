import React from 'react'
import './Button.css'

function Button({symbol, text, newStyle = "false"}) {
  return (
    <div className = {newStyle == 'true' ? "new_button" : "button"}>
        <img src={symbol} />
        <p>{text}</p>
    </div>
  )
}

export default Button