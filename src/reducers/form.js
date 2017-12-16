import { handleActions } from 'redux-actions'

const formReducer = handleActions(
  {
    setFormData (state, action) {
      console.log(state, action)
      return { ...state, [action.payload.key]: action.payload.value }
    },
  },
  // initialState
  {},
)

export default formReducer
