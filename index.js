import React, {useEffect, useContext} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom';
import Routes from './routes/Routes'
import Appbar from './components/layout/Appbar'
import Sidenav from './components/layout/Sidenav'
import Footer from './components/layout/Footer'
// import feather from 'feather-icons/dist/feather.js'
import './style.css';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.js';
import 'feather-icons/dist/feather.js'
import {useFeather, useBackground} from './hooks'
import ProjectContextProvider from './contexts/projects'


const App = () => {
  useFeather()
  useBackground()
  
  
  return (
    <ProjectContextProvider>
      <div id='app'>
        <Router>
          <Appbar />
          <Sidenav />
          <Footer />
          <div  className="uk-container uk-container-xsmall">
            <Routes />
          </div>
          <div id='decor'>
            <i data-feather='triangle'></i>
            <i data-feather='circle'></i>
            <i data-feather='square'></i>
          </div>
        </Router>
      </div>
    </ProjectContextProvider>
  )

}

render(<App />, document.getElementById('root'));
