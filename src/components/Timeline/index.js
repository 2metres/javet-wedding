import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './module.scss'

const Timeline = ({ events }) => (
  <section className={styles.root}>
    <div className="row">
      { events.map((event, i) => (
        <div
          key={`${event.slug}__${event.id}`}
          className={
            classNames.bind(styles)({
              event: true,
              // breakpoint-sm
              'col-sm-6': i !== 0,
              'col-sm-12': i === 0,
              //  breakpoint-md
              'col-md-4': true,
            })
          }
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
