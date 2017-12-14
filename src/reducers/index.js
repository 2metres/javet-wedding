import { combineReducers } from 'redux'
import form from './form'
import ui from './ui'

const reducers = combineReducers({
  form,
  ui,
})

export default reducers
