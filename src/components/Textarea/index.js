import React from 'react'

import styles from './module.scss'

const Textarea = ({
  question,
  action,
  value,
}) => (
  <div className={styles.root}>
    <label htmlFor={question.slug} className={styles.title}>
      { question.prompt }
    </label>
    <textarea
      id={question.slug}
      onChange={action}
      className="form-control"
      value={value}
    />
  </div>
)

export default Textarea
