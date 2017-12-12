import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Form = ({ mutate }) => {
  const handleClick = () => {
    mutate({
      variables: {
        name: 'Andrew Carr',
        attending: true,
        dietaryRestrictions: false,
        dietaryRestrictionDescription: '',
        song: 'Keep em seperated',
      },
    }).then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <button onClick={handleClick}> Click Me! </button>
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
      id
    }
  }
`

const FormWithData = graphql(createResponse)(Form)

export default FormWithData
