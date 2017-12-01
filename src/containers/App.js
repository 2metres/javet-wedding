import React from 'react'
import { Router } from 'react-static'

import Routes from 'react-static-routes'

const App = () => (
  <Router>
    <main id="content">
      <Routes />
    </main>
  </Router>
)

export default App
