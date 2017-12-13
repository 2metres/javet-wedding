import React, { Component } from 'react'
import { getRouteProps } from 'react-static'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import classNames from 'classnames/bind'

import styles from './module.scss'

class Form extends Component {
  state = {}

  handleInput = (slug, value) => {
    this.setState({ [slug]: value })
  }

  handleSubmit = () => {
    this.props.mutate({ variables: this.state }).catch(err => console.log(err))
  }

  render () {
    return (
      <form className={styles.root}>
        {
          this.props.questions.map(question => (
            <div key={`${question.slug}--${question.format}`} className="form-group">
              <h3 className={styles.title}>{ question.prompt }</h3>
              { question.hint &&
                <div><small>{ question.hint }</small></div>
              }
              { question.format === 'Textarea' &&
                <textarea
                  id={question.slug}
                  onChange={e => this.handleInput(question.slug, e.target.value)}
                  className="form-control"
                />
              }
              { question.format === 'TextInput' &&
                <input
                  id={question.slug}
                  onChange={e => this.handleInput(question.slug, e.target.value)}
                  className="form-control"
                  type="text"
                />
              }
              { question.format === 'YesNo' &&
                <div>
                  <button
                    type="button"
                    onClick={() => this.handleInput(question.slug, true)}
                    className={classNames.bind(styles)({
                      'btn': true,
                      'btn-primary': this.state[question.slug] === true,
                    })}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => this.handleInput(question.slug, false)}
                    className={classNames.bind(styles)({
                      'btn': true,
                      'btn-primary': this.state[question.slug] === false,
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
          onClick={this.handleSubmit}
          type="button"
        >
          Click Me!
        </button>
      </form>
    )
  }
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

const FormWithData = graphql(createResponse)(Form)

export default getRouteProps(FormWithData)
