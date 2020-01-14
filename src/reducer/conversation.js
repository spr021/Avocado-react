const initial = {
  name: '',
  profImg: '',
  id: '',
  lastPmDatepm: '',
  newMassgeList: [],
  massageList: [],
  saveMassageList: [{
    sender: {
      id: null,
      avatar_url: null,
      flag_url: null,
      cover_url: null,
      name: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      phone_number: null,
      email: null,
      description: null,
      user_type: null,
      location_lat: null,
      location_long: null,
      address: null,
      country_code: null,
      mobile_number: null,
      website: null,
      promoted: false,
      verified: false,
      bitcoin_wallet_address: null
    },
    receiver: {
      id: null,
      avatar_url: null,
      flag_url: null,
      cover_url: null,
      name: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      phone_number: null,
      email: null,
      description: null,
      user_type: null,
      location_lat: null,
      location_long: null,
      address: null,
      country_code: null,
      mobile_number: null,
      website: null,
      promoted: false,
      verified: false,
      bitcoin_wallet_address: null
    },
    date: null,
    text: null
  }],
  massageOfList: [],
  lightMod: false,
  blurMod: false,
  conversation_details: [{
    users: [],
    unseen_messages: {}
  }]
}

const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'NAME_TO_HEADER':
      return {
        ...state,
        name: action.name,
        profImg: action.profImg,
        id: action.id
      }
    case 'SEND_PM_TO_CHATBOX':
      return {
        ...state,
        massageList: [
          ...state.massageList,
          {
            pm: action.pm
          }
        ]
      }
    case 'SAVE_CONV':
      return {
        ...state,
        conversation_details: action.convList,
        lastPmDatepm: Math.floor((new Date(action.convList[0].latest_message_date).getTime() + 12600) / 1000)
      }
    case 'MASSAGE_LIST':
      return {
        ...state,
        saveMassageList: action.massageList
      }
    case 'LIST_OF_MASSAGE':
      return {
        ...state,
        massageOfList: action.massage
      }
    case 'CHANGE_LIGHT_MOD':
      return {
        ...state,
        lightMod: action.mod
      }
    case 'CHANGE_BLUR_MOD':
      return {
        ...state,
        blurMod: action.mod
      }
    case 'SAVE_NEW_MASSAGE':
      return {
        ...state,
        newMassgeList: action.massageList
      }
    case 'SAVE_NEW_PM':
      return {
        ...state,
        saveMassageList: action.massageList
      }
    default:
      return state
  }
}
export default conversation
