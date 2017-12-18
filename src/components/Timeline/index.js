import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as icons from '../../assets'
import styles from './module.scss'

const Timeline = ({ events }) => (
  <section id="timeline" className={styles.root}>
    <h2 className={styles.title}>What’s happening on the day</h2>
    <div className="row">
      { events.map(event => (
        <div
          className={classNames(styles.event, 'col-md-3')}
          key={`${event.slug}__${event.id}`}
        >
          <picture
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{__html: icons[event.icon] || event.icon }}
            className={styles.icon}
          />
          <h3 className={styles.eventTitle}>{ event.title }</h3>
          <h4 className={styles.eventTime}>{ event.time }</h4>
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
