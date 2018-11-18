const initialState = {
  current: {},
  all: []
}

export default function itemsReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_ITEMS':
      return { ...state, all: action.payload }
    case 'CREATE_ITEM':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_ITEM':
      return { ...state, all: state.all.filter(item => item._id !== action.payload._id) }
    default: return state
  }
}
