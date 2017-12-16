import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import classNames from 'classnames/bind'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import styles from './module.scss'

const Form = ({
  questions,
  actions,
  mutate,
  form,
}) => {
  const handleInput = (key, value) => {
    actions.setFormData({ key, value })
  }

  const handleSubmit = () => {
    mutate({
      variables: form,
    }).then(() => actions.toggleForm())
      .catch(err => console.warn(err))
  }

  return (
    <form className={styles.root}>
      {
        questions.map(question => (
          <div
            key={`${question.slug}--${question.format}`}
            className="form-group"
          >
            <h3 className={styles.title}>{ question.prompt }</h3>
            { question.hint && <div><small>{ question.hint }</small></div> }
            { question.format === 'Textarea' &&
              <textarea
                id={question.slug}
                onChange={e => handleInput(question.slug, e.target.value)}
                className="form-control"
                value={form[question.slug]}
              />
            }
            { question.format === 'TextInput' &&
              <input
                id={question.slug}
                onChange={e => handleInput(question.slug, e.target.value)}
                className="form-control"
                value={form[question.slug]}
                type="text"
              />
            }
            { question.format === 'YesNo' &&
              <div>
                <button
                  type="button"
                  onClick={() => handleInput(question.slug, true)}
                  className={classNames.bind(styles)({
                    'btn': true,
                    'btn-primary': form[question.slug] === true,
                  })}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => handleInput(question.slug, false)}
                  className={classNames.bind(styles)({
                    'btn': true,
                    'btn-primary': form[question.slug] === false,
                  })}
                >
                  No
                </button>
              </div>
            }
          </div>
        ))
      }
      <button
        className="btn btn-primary"
        onClick={() => handleSubmit()}
        type="button"
      >
        Click Me!
      </button>
    </form>
  )
}

const createResponse = gql`
  mutation createResponse(
    $name: String!,
    $attending: Boolean!
    $dietaryRestrictions: Boolean!,
    $dietaryRestrictionDescription: String!,
    $song: String!
  ) {
    createResponse(
      name: $name,
      attending: $attending,
      dietaryRestrictions: $dietaryRestrictions,
      dietaryRestrictionDescription: $dietaryRestrictionDescription,
      song: $song
    ) {
      id,
      name,
      attending,
      dietaryRestrictions,
      dietaryRestrictionDescription,
      song
    }
  }
`

const mapStateToProps = state => ({
  form: state.form,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

const FormWithData = graphql(createResponse)(Form)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormWithData)
