const initialState = {
  attending: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'attending':
      return {
        ...state,
        attending: action.payload,
      }
    default:
      return state
  }
}
