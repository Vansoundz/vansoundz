import React, {useEffect, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {useFeather, useProjectImages} from '../hooks'

const Home = () => {
  useProjectImages()
  
  useFeather()
  return (
    <div id='home'>
      <div className="head">
        <div style={{zIndex: 10}}>
          Responsive and elegant applications...
          <div>
            <NavLink className="uk-button uk-flex-inline" to="/portfolio">
              View portfolio
              <i data-feather="arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    
       <i id="xdecor" data-feather="x"></i>
      <i id="ahdecor" data-feather="hexagon"></i>
      <i id="target" data-feather="target"></i>
      <i id="hdecor" data-feather="hexagon"></i>
      <i id="tup" data-feather="trending-up"></i>
      <div className="uk-child-width-expand@s uk-text-center  uk-grid-match" data-uk-grid>
    <div>
        <div
         className="uk-card uk-card-default uk-box-shadow-large mcard uk-border-rounded uk-card-body">
          <div className="micon">
            <i data-feather="zap" ></i>
          </div>
          <div className="mcontent uk-margin-small-top">
            Get your applications within no time
          </div>
         </div>
          </div>
          <div>
              <div
              className="uk-card  uk-card-default uk-box-shadow-large mcard uk-border-rounded uk-card-body">
                <div className="micon">
                  <span data-feather="settings"></span>
                </div>
                <div className="mcontent uk-margin-small-top">
                  Robust application built with best technology
                </div>
              </div>
          </div>
          <div>
              <div
              className="uk-card uk-card-default uk-box-shadow-large mcard uk-border-rounded uk-card-body">
                <div className="micon">
                  <span data-feather="dollar-sign"></span>
                </div>
                <div className="mcontent uk-margin-small-top">
                  Best ever deals available in the market
                </div>
              </div>
          </div>
      </div>
     
    </div>
  )
}

export default Home;