
import React from 'react'

function SidebarItem({symbol, name, newStyle = "false"}) {
  return (
    <div className = {newStyle == "false" ? "sidebar-item" : "new-sidebar-item"}>
        <img src={symbol} />
        <p>{name}</p>
    </div>
  )
}

export default SidebarItem