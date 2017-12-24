import React from 'react'
import Routes from 'react-static-routes'
import { Router } from 'react-static'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createStore } from 'redux'

import reducers from './reducers'

if (typeof window === 'undefined') {
  global.window = {}
}

const store = createStore(
  reducers,
  {}, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_GRAPHCMS_API }),
  cache: new InMemoryCache(),
})

const App = () => (
  <ApolloProvider client={client} store={store}>
    <Router>
      <div id="content">
        <Routes />
      </div>
    </Router>
  </ApolloProvider>
)

export default App
