import React from 'react'
import classNames from 'classnames'
import { paramCase } from 'change-case'
import Markdown from 'react-markdown'

import styles from './module.scss'

const FAQs = ({ items }) => (
  <section className={styles.root} id="faqs">
    <h2 className={styles.title}>Things to know</h2>
    <div className="row">
      { items.map(item => (
        <div key={paramCase(item.title)} className={classNames(styles.item, 'col-md-6')}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <Markdown className={styles.itemBody}>{item.body}</Markdown>
        </div>))
      }
    </div>
  </section>
)

export default FAQs
