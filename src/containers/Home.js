import React from 'react'
import { compose } from 'recompose'
import { getRouteProps, getSiteProps } from 'react-static'

const Home = ({ events }) => (
  <div>
    <h1>Welcome Home!</h1>
    { events.map(event => (
      <section>
        <div>{event.title}</div>
        <div>{event.time}</div>
      </section>
    ))
    }
  </div>
)

export default compose(
  getRouteProps,
  getSiteProps,
)(Home)
