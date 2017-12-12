import React from 'react'
import Routes from 'react-static-routes'
import { Router } from 'react-static'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { Nav } from '../components'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graphcms.com/simple/v1/cjaneflbw334r01578tve6v3r' }),
  cache: new InMemoryCache(),
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div id="content">
        <Nav />
        <Routes />
      </div>
    </Router>
  </ApolloProvider>
)

export default App
