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
        questions.map(q => (
          <div key={`${q.slug}--${q.format}`}>
            { form.dietaryRestrictions && q.format === 'Textarea' &&
              <Textarea
                action={handleInput}
                value={form[q.slug]}
                question={q}
              />
            }
            { q.format === 'TextInput' &&
              <TextInput
                action={handleInput}
                value={form[q.slug]}
                question={q}
              />
            }
            { q.format === 'YesNo' &&
              <ButtonGroup
                answers={constants.YES_NO}
                question={q}
                action={handleInput}
                value={form[q.slug]}
              />
            }
          </div>
        ))
      }
      <button
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
