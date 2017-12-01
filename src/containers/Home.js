import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { compose } from 'recompose'
import Markdown from 'react-markdown'
import {
  getRouteProps,
  getSiteProps,
  Head,
} from 'react-static'

const Home = ({
  site,
  homepage,
  events,
}) => (
  <div className="container">
    <Head>
      <title>{ site.title }</title>
    </Head>
    <header className="Home__header">
      <h1>{ homepage.title }</h1>
      <Markdown>{ homepage.body }</Markdown>
    </header>
    <main className="Home__content">
      <div className="row">
        { events.map(event => (
          <section
            key={`${event.slug}__${event.id}`}
            className={classNames('col-sm-6', 'col-md-4', 'col-lg-3')}
          >
            <div>{ event.title }</div>
            <div>{ event.time }</div>
          </section>))
        }
      </div>
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
