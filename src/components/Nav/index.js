import React from 'react'
import PropTypes from 'prop-types'
import { getRouteProps, Link } from 'react-static'

import styles from './module.scss'

const Nav = ({ nav }) => (
  <nav className={styles.root}>
    <div className="container">
      <ol className={styles.list}>
        {
          nav.map(item => (
            <li className={styles.item}>
              <Link className={styles.link} to={`#${item.slug}`} >
                {item.title}
              </Link>
            </li>
          ))
        }
      </ol>
    </div>
  </nav>
)

Nav.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
}

export default getRouteProps(Nav)
