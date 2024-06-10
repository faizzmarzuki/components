import React, { useState } from 'react'
import './page.css'

export default function DarkMode() {

  const [toggled, setToggled] = useState(false);

  return (
    <div>
        <h1>Toggle Dark Mode</h1>
        <div className='component-div'>
              <button className={`btn-darkMode ${toggled ? `toggled` : ''}`} onClick={() => setToggled(!toggled) }>
                <div className='thumb'></div>
            </button>
        </div>
    </div>
  )
}
