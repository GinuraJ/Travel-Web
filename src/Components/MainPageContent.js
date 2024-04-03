import React from 'react'
import './MainPageContent.css'


export default function MainPageContent() {
  return (
    <div className='container'>
    <div className="box">
      <h1>Good Morning!</h1>
      <p>Explore beautiful places in the world with Acenda</p>
      <div className="input-group">
        <input type="text" placeholder="Location" />
        <input type="date" placeholder="Check in" />
        <input type="date" placeholder="Check out" />
        <input type="number" placeholder="Guests" />
        <button>Search</button>
      </div>
    </div>
    </div>
  )
}
