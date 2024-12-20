import React from 'react'
import './Counts.css'

function Counts({count, name}) {
  return (
    <div className='count'>
        <h1>{count}</h1>
        <p>{name}</p>
    </div>
  )
}

export default Counts