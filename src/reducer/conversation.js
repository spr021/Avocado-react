const initial = {
  name: ''
}
const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'NAME_TO_HEADER':
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
export default conversation
