export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_PANDAS':
      var state = { ...state }
      state.testing = "testing"
      return state
    default:
      return state
  }
}