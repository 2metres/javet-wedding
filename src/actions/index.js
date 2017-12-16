import { createAction } from 'redux-actions'

export const attending = createAction('attending')
export const name = createAction('name')
export const dietaryRestrictions = createAction('dietaryRestrictions')
export const dietaryRestrictionDescription = createAction('dietaryRestrictionDescription')
export const song = createAction('song')

export const toggleForm = createAction('toggleForm')
export const setFormData = createAction('setFormData')
