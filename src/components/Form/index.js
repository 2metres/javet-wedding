import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  ButtonGroup,
  Textarea,
  TextInput,
} from '../../components'

import * as actions from '../../actions'
import * as constants from '../../constants'

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
          <div key={`${question.slug}--${question.format}`}>
            { form.dietaryRestrictions && question.format === 'Textarea' &&
              <Textarea
                action={handleInput}
                value={form[question.slug]}
                question={question}
              />
            }
            { question.format === 'TextInput' &&
              <TextInput
                action={handleInput}
                value={form[question.slug]}
                question={question}
              />
            }
            { question.format === 'YesNo' &&
              <ButtonGroup
                answers={constants.YES_NO}
                question={question}
                action={handleInput}
                value={form[question.slug]}
              />
            }
            { question.hint &&
              <small className="text-muted">{ question.hint }</small>
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
