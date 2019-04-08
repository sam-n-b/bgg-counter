const initialState = []

const rankList = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      return action.updateList
    default:
      return state
  }
}

export default rankList