import React from 'react'
import {NavLink} from 'react-router-dom'
import UIkit from 'uikit'

const Sidenav = () => {
  const close = () => {
    const element = document.querySelector('#offcanvas-flip')
    UIkit.offcanvas(element).hide();
  }
  return (
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
          <i className="uk-offcanvas-close sclose" uk-close='true'></i>
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul className="uk-nav uk-nav-default uk-nav-center uk-margin-auto-vertical">
            <li>
              <NavLink to='/' onClick={close} exact={true}>
                <span className="uk-margin-small-right" uk-icon='table'></span> 
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={close} exact={true}>
                <span className="uk-margin-small-right" uk-icon="icon: table"></span>
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/portfolio' onClick={close} exact={true}>
                <span className="uk-margin-small-right" uk-icon="icon: table"></span>
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={close} exact={true}>
                <span className="uk-margin-small-right" uk-icon="icon: table"></span>
                <span>Contact</span>
              </NavLink>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidenav