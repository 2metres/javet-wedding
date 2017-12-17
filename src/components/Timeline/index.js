import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './module.scss'

const Timeline = ({ events }) => (
  <section id="timeline" className={styles.root}>
    <div className="row">
      { events.map((event, i) => (
        <div
          className={styles.event}
          key={`${event.slug}__${event.id}`}
        >
          <h3 className={styles.eventTitle}>{ event.title }</h3>
          <div className={styles.eventTime}>{ event.time }</div>
        </div>))
      }
    </div>
  </section>
)

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      time: PropTypes.string,
    }),
  ).isRequired,
}

export default Timeline
