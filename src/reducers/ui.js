import Immutable from 'immutable'
import { handleActions } from 'redux-actions'

const uiReducer = handleActions(
  {
    toggleForm (state) {
      return state.get('showForm')
        ? state.set('showForm', false)
        : state.set('showForm', true)
    },
  },
  // initialState
  Immutable.Map({
    showForm: false,
  }),
)

export default uiReducer
