import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import Markdown from 'react-markdown'
import {
  getRouteProps,
  getSiteProps,
  Head,
} from 'react-static'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import * as icons from '../../assets'
import {
  Form,
  Timeline,
} from '../../components'

import styles from './module.scss'

class Home extends Component {
  render () {
    const {
      actions,
      questions,
      homepage,
      events,
      site,
      ui,
    } = this.props

    return (
      <div className="container">
        <Head>
          <title>{ site.title }</title>
        </Head>
        <header className={styles.header}>
          <picture
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{__html: icons.car }}
            className={styles.icon}
          />
          <h1 className={styles.title}>{ homepage.title }</h1>
          <Markdown>{ homepage.body }</Markdown>
          { !ui.showForm &&
            <button
              className={styles.button}
              onClick={() => actions.toggleForm()}
            >
              RSVP NOW!
            </button>
          }
        </header>
        { ui.showForm && <Form questions={questions} /> }
        <Timeline events={events} />
      </div>
    )
  }
}

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
}

const mapStateToProps = state => ({
  ui: state.ui,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  getSiteProps,
  getRouteProps,
)(Home)
