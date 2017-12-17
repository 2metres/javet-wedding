import { handleActions } from 'redux-actions'

const formReducer = handleActions(
  {
    setFormData (state, action) {
      return { ...state, [action.payload.key]: action.payload.value }
    },
  },
  // initialState
  {
    dietaryRestrictionDescription: ' ',
  },
)

export default formReducer
