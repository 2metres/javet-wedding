import React from 'react'

import styles from './module.scss'

const TextInput = ({
  question,
  action,
  value,
}) => (
  <div className={styles.root}>
    <label htmlFor={question.slug} className={styles.title}>
      { question.prompt }
    </label>
    <input
      type="text"
      id={question.slug}
      onChange={e => action(question.slug, e.targe.value)}
      className="form-control"
      value={value}
    />
  </div>
)

export default TextInput
