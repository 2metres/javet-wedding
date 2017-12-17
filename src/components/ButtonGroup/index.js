import React from 'react'
import classNames from 'classnames/bind'

import styles from './module.scss'

const ButtonGroup = ({
  question,
  action,
  answers,
  value,
}) => (
  <div className={styles.root}>
    <label htmlFor={question.slug} className={styles.title}>
      { question.prompt }
    </label>
    <div className={styles.list}>
      { answers.map(answer => (
        <button
          key={`${question.slug}--${answer.key}`}
          type="button"
          onClick={() => action(question.slug, answer.value)}
          className={
            classNames.bind(styles)({
              'btn': true,
              'btn-primary': (value === answer.value) || null,
            })
          }
        >
          { answer.key }
        </button>))
      }
    </div>
  </div>
)

export default ButtonGroup
