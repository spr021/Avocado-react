const initial = {
  name: '',
  profImg: '',
  massageList: []
}
export function sum (a, b) {
  return a + b
}
module.exports = sum
const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'NAME_TO_HEADER':
      return {
        ...state,
        name: action.name,
        profImg: action.profImg
      }
    case 'SEND_PM_TO_CHATBOX':
      return {
        ...state,
        massageList: [
          ...state.massageList,
          {
            pm: action.pm,
            id: 1
          }
        ]
      }
    default:
      return state
  }
}
export default conversation
