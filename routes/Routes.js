import React from 'react'
import {Switch, Route } from 'react-router-dom'

import  Home from '../components/Home'
import  About from '../components/About'
import  Contact from '../components/Contact'
import  Portfolio from '../components/Portfolio'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/portfolio' exact component={Portfolio} />
    </Switch>
  )
}

export default Routes