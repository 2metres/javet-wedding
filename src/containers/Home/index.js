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
      ui,
      site,
    } = this.props

    return (
      <div className="container">
        <Head>
          <title>{ site.title }</title>
        </Head>
        <header className={styles.header}>
          <svg
            className={styles.icon}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48.9 64.6"
          >
            <path className="primary" d="M36.7,50.8c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6c-0.9,0-1.6,0.7-1.6,1.6C35.1,50.1,35.8,50.8,36.7,50.8 M36.7,45.9 c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3C33.5,47.4,34.9,45.9,36.7,45.9" />
            <path className="primary" d="M12.1,50.8c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6c-0.9,0-1.6,0.7-1.6,1.6C10.4,50.1,11.2,50.8,12.1,50.8 M12.1,45.9 c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3C8.8,47.4,10.3,45.9,12.1,45.9" />
            <rect className="primary" x="23.6" y="48.4" transform="matrix(1 -1.363046e-03 1.363046e-03 1 -6.868844e-02 3.332891e-02)" width="1.6" height="4.1" />
            <rect className="primary" x="26.9" y="48.4" transform="matrix(1 -1.363046e-03 1.363046e-03 1 -6.867927e-02 3.781061e-02)" width="1.6" height="4.1" />
            <rect className="primary" x="20.3" y="48.4" transform="matrix(1 -1.363046e-03 1.363046e-03 1 -6.869760e-02 2.884723e-02)" width="1.6" height="4.1" />
            <rect className="primary" x="30.2" y="48.3" transform="matrix(1 -1.363046e-03 1.363046e-03 1 -6.867011e-02 4.229229e-02)" width="1.6" height="4.1" />
            <rect className="primary" x="17" y="48.4" transform="matrix(1 -1.363046e-03 1.363046e-03 1 -6.870677e-02 2.436418e-02)" width="1.6" height="4.1" />
            <path className="primary" d="M1.4,36.9l1.6,0l0-1.6l-1.6,0L1.4,36.9z M41.7,54.1l0-12.3l-0.8,0l-3.3,0l-3.3,0l0,4.1c0,0.5-0.4,0.8-0.8,0.8l-18.1,0 c-0.5,0-0.8-0.4-0.8-0.8l0-4.1l-6.6,0l-0.8,0l0,12.3L41.7,54.1z M5.5,59.1l4.1,0l4.9,0l18.9,0l4.9,0l4.9,0l0-3.3l-0.8,0l-36.2,0 l-0.8,0L5.5,59.1z M10.5,63.2l3.3,0l0-2.5l-3.3,0L10.5,63.2z M34.3,63.1l3.3,0l0-2.5l-3.3,0L34.3,63.1z M15.4,40.1l6.5,0 c-0.1-0.7-0.4-1.4-0.8-1.9c0,0,0,0-0.1-0.1c-0.7-1-1.7-1.7-2.8-2c0,0,0,0-0.1,0c-0.2,0-0.3-0.1-0.5-0.1c0,0-0.1,0-0.1,0 c-0.2,0-0.4,0-0.6,0s-0.4,0-0.6,0c0,0-0.1,0-0.1,0c-0.2,0-0.3,0.1-0.5,0.1c0,0,0,0-0.1,0c-1.1,0.3-2.1,1-2.8,2c0,0,0,0-0.1,0.1 c-0.4,0.6-0.6,1.2-0.8,1.9L15.4,40.1z M17.5,32.7l-1.1,0c-1.6,0-3,1.2-3.3,2.8l0,0c0.8-0.6,1.7-1,2.7-1.1c0.1,0,0.1,0,0.2,0 c0.3,0,0.6-0.1,0.9-0.1s0.6,0,0.9,0.1c0.1,0,0.1,0,0.2,0c1,0.2,1.9,0.6,2.7,1.1l0,0C20.6,34,19.2,32.7,17.5,32.7 M17,31.1 c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5C14.5,30,15.6,31.1,17,31.1 M32.6,41.8l-4.9,0l-11.5,0l0,3.3 l16.4,0L32.6,41.8z M36.2,35.7c0-0.2-0.1-0.4-0.1-0.5c0-0.1,0-0.1-0.1-0.2c0,0,0-0.1,0-0.1l-6.6,5.3l4,0l3.2,0L36.2,35.7z M32.3,32.7c-1.7,0-3.1,1.3-3.3,3l0,0l-0.3,2.9l6.3-5.1c-0.6-0.5-1.3-0.8-2.1-0.8L32.3,32.7z M32.6,31.1c1.4,0,2.5-1.1,2.5-2.5 c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5C30.1,30,31.3,31.1,32.6,31.1 M40,22.8l0-2.5l-14.8,0l0,1.6l2.3,0l0,1.6l-6.6,0l0-1.6 l2.6,0l0-1.6l-14.8,0l0,2.5l0,17.3l1.7,0c0.1-0.9,0.4-1.7,0.8-2.4c0-0.1,0-0.1,0-0.2l0.3-2.2c0.2-1.6,1.3-3,2.7-3.7 c-0.8-0.8-1.3-1.8-1.3-3c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1c0,1.2-0.5,2.3-1.3,3c1.4,0.7,2.4,2,2.7,3.7l0.3,2.2 c0,0.1,0,0.1,0,0.2c0.4,0.7,0.7,1.5,0.8,2.4l3.4,0l0.4-4.6c0.2-1.7,1.2-3.1,2.6-3.9c-0.9-0.8-1.4-1.8-1.4-3.1c0-2.3,1.8-4.1,4.1-4.1 c2.3,0,4.1,1.8,4.1,4.1c0,1.2-0.5,2.3-1.4,3.1c0.8,0.4,1.5,1.1,1.9,1.9c0,0,0,0.1,0.1,0.1c0.1,0.1,0.1,0.3,0.2,0.4 c0.1,0.1,0.1,0.3,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0.3,0.1,0.5,0.1,0.8l0.4,4.6l1.7,0L40,22.8z M8.8,18.8l31.2,0l0-1.6l-31.2,0 L8.8,18.8z M47.4,35.2l-1.6,0l0,1.6l1.6,0L47.4,35.2z M0.6,33.6l3.3,0c0.5,0,0.8,0.4,0.8,0.8l0,3.3c0,0.5-0.4,0.8-0.8,0.8l0,0 l1.7,2.4c0-0.4,0.4-0.7,0.8-0.7l0.8,0l0-17.3l0-3.3l0-3.3c0-0.5,0.4-0.8,0.8-0.8l32.9,0c0.5,0,0.8,0.4,0.8,0.8l0,3.3l0,3.3l0,17.3 l0.8,0c0.4,0,0.8,0.3,0.8,0.7l1.7-2.4l0,0c-0.5,0-0.8-0.4-0.8-0.8l0-3.3c0-0.5,0.4-0.8,0.8-0.8l3.3,0c0.5,0,0.8,0.4,0.8,0.8l0,3.3 c0,0.5-0.4,0.8-0.8,0.8l-1.2,0l-3.7,5.2l0,10.4l0.8,0c0.5,0,0.8,0.4,0.8,0.8l0,4.9c0,0.5-0.4,0.8-0.8,0.8l-4.9,0l0,3.3 c0,0.5-0.4,0.8-0.8,0.8l-4.9,0c-0.5,0-0.8-0.4-0.8-0.8l0-3.3l-17.3,0l0,3.3c0,0.5-0.4,0.8-0.8,0.8l-4.9,0c-0.5,0-0.8-0.4-0.8-0.8 l0-3.3l-4.1,0c-0.5,0-0.8-0.4-0.8-0.8l0-4.9c0-0.5,0.4-0.8,0.8-0.8l0.8,0l0-10.4l-3.7-5.2l-1.2,0c-0.5,0-0.8-0.4-0.8-0.8l0-3.3 C-0.3,34,0.1,33.6,0.6,33.6" />
            <path className="primary" d="M26.9,2c1.4,0,2.2,1,2.2,2.5c0,1.3-0.4,2.2-1.4,3.2c-0.8,0.8-2,1.6-3.4,2.5c-1.4-0.9-2.6-1.7-3.5-2.5c-1-1-1.4-1.9-1.4-3.2 C19.5,3,20.4,2,21.8,2c0.9,0,1.7,0.6,1.9,0.8c0.2,0.2,0.6,0.6,0.6,0.6S24.8,3,25,2.8C25.3,2.5,26.1,2,26.9,2 M24.4,12.2 c0.2,0,0.3,0,0.5-0.1l0.5-0.3c1.5-0.9,2.7-1.7,3.7-2.7C30.4,7.7,31,6.3,31,4.5c0-2.4-1.8-4.4-4-4.3c-1.1,0-2,0.4-2.6,0.8 c-0.6-0.4-1.5-0.8-2.6-0.8c-2.3,0-4,1.9-4,4.4c0,1.7,0.6,3.2,1.9,4.5c1,1,2.3,1.8,3.7,2.7l0.5,0.3C24,12.2,24.2,12.2,24.4,12.2" />
            <polygon className="primary" points="2.1,17.9 2.1,17.9 2.1,17.9 2.1,17.9 " />
            <polygon className="primary" points="2.1,17.9 2.1,17.9 2.1,17.9 2.1,17.9 " />
            <rect className="primary" x="1.4" y="16.8" transform="matrix(0.7068 -0.7074 0.7074 0.7068 -12.0456 6.8134)" width="1.6" height="2.3" />
            <rect className="primary" x="1" y="23.7" transform="matrix(0.7069 -0.7073 0.7073 0.7069 -16.696 8.7396)" width="2.3" height="1.6" />
            <rect className="primary" x="45.4" y="17.1" transform="matrix(0.7059 -0.7083 0.7083 0.7059 1.0106 38.2505)" width="2.3" height="1.6" />
            <rect className="primary" x="45.8" y="23.3" transform="matrix(0.7058 -0.7084 0.7084 0.7058 -3.6427 40.1979)" width="1.6" height="2.3" />
          </svg>

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
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      time: PropTypes.string,
      icon: PropTypes.string,
    }).isRequired,
  ),
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
