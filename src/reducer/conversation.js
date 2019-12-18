const initial = {
  name: '',
  profImg: '',
  id: '',
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
    latest_message: null,
    latest_message_date: null,
    id: 10,
    users: [
      {
        id: 6,
        avatar_url: 'http://api.paywith.click//media/default.jpg',
        flag_url: 'https://www.countryflags.io/None/flat/64.png',
        cover_url: 'http://api.paywith.click//media/cover.jpg',
        name: null,
        first_name: null,
        middle_name: null,
        last_name: null,
        phone_number: null,
        email: 'saber@pourrahimi.me',
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
      {
        id: 5,
        avatar_url: 'http://api.paywith.click//media/default.jpg',
        flag_url: 'https://www.countryflags.io/None/flat/64.png',
        cover_url: 'http://api.paywith.click//media/cover.jpg',
        name: null,
        first_name: null,
        middle_name: null,
        last_name: null,
        phone_number: null,
        email: '',
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
      }
    ],
    unseen_messages: {
      6: 0,
      5: 0
    }
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
        conversation_details: action.convList
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
    default:
      return state
  }
}
export default conversation
