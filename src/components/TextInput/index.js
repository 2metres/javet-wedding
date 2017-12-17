import React from 'react'
import classNames from 'classnames/bind'

import styles from './module.scss'

const TextInput = ({
  question,
  action,
  value,
}) => (
  <div className={classNames(styles.root, 'form-group')}>
    <label htmlFor={question.slug} className={styles.title}>{ question.prompt }</label>
    <input
      type="text"
      id={question.slug}
      onChange={e => action(question.slug, e.target.value)}
      className="form-control"
      value={value}
    />
  { question.hint && <div className="hint text-muted">{ question.hint }</div> }
  </div>
)

export default TextInput
