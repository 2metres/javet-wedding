import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import Markdown from 'react-markdown'
import {
  getRouteProps,
  getSiteProps,
  Head,
} from 'react-static'

import { Timeline } from '../../components'

import styles from './module.scss'

const Home = ({
  site,
  homepage,
  events,
}) => (
  <div className="container">
    <Head>
      <title>{ site.title }</title>
    </Head>
    <header className={styles.header}>
      <h1>{ homepage.title }</h1>
      <Markdown>{ homepage.body }</Markdown>
      <button>RSVP NOW!</button>
    </header>
    <main className={styles.content}>
      <Timeline events={events} />
    </main>
  </div>
)

Home.defaultProps = {
  events: [],
}

Home.propTypes = {
  site: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  homepage: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      time: PropTypes.string,
      icon: PropTypes.string,
    }).isRequired,
  ),
}

export default compose(
  getSiteProps,
  getRouteProps,
)(Home)
