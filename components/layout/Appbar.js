import React from 'react'
import {NavLink} from 'react-router-dom'

const Appbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/contact">Contact</NavLink>
      <div  >
        <NavLink className='uk-logo' to="/">
        Vansoundz
        </NavLink>
      </div>
      <div>
        <button className="uk-button menu" type="button" uk-toggle="target: #offcanvas-flip">
          <i  data-feather="align-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Appbar