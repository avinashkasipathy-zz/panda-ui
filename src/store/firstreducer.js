export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_PANDAS':
      var state = { ...state }
      state.testing = action.testing;
      return state
    case 'FETCH_SUCCESS':
      var state = { ...state }
      state.testing = action.testing;
      return state
    default:
      return state
  }
}