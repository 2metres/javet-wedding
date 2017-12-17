import React from 'react'
import classNames from 'classnames/bind'

import styles from './module.scss'

const ButtonGroup = ({
  question,
  action,
  answers,
  value,
}) => (
  <div className={classNames(styles.root, 'form-group')}>
    <label htmlFor={question.slug} className={styles.label}>{ question.prompt }</label>
    <ul className={styles.list}>
      { answers.map(answer => (
        <li className={styles.listItem}>
          <button
            key={`${question.slug}--${answer.key}`}
            type="button"
            onClick={() => action(question.slug, answer.value)}
            className={
              classNames.bind(styles)({
                button: true,
                active: (value === answer.value) || null,
              })
            }
          >
            { answer.key }
          </button>
        </li>))
      }
    </ul>
    { question.hint &&
      <div className={styles.hint}>{ question.hint }</div>
    }
  </div>
)

export default ButtonGroup
