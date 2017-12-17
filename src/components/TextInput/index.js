import React from 'react'
import classNames from 'classnames/bind'

import styles from './module.scss'

const TextInput = ({
  question,
  action,
  value,
}) => (
  <div className={classNames(styles.root, 'form-group')}>
    <label htmlFor={question.slug} className={styles.label}>{ question.prompt }</label>
    <input
      type="text"
      value={value}
      id={question.slug}
      className={classNames(styles.input, 'form-control')}
      onChange={e => action(question.slug, e.target.value)}
    />
    { question.hint &&
      <div className={styles.hint}>{ question.hint }</div>
    }
  </div>
)

export default TextInput
