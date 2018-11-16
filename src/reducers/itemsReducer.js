const initialState = {
  current: {},
  all: []
}

export default function itemsReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_ITEMS':
      return { ...state, all: action.payload }
    default: return state
  }
}
