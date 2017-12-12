import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'

import { Nav } from '../components'

const App = () => (
  <Router>
    <div id="content">
      <Nav />
      <Routes />
    </div>
  </Router>
)

export default App
