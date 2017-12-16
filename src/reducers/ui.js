import { handleActions } from 'redux-actions'

const uiReducer = handleActions(
  {
    toggleForm (state) {
      return { ...state, showForm: !state.showForm }
    },
  },
  // initialState
  {
    showForm: false,
  },
)

export default uiReducer
