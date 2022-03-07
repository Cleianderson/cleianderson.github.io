interface Action {
  type: string
  payload: any
}

const initialState: MainState = {
  userPassword: 'teste',
  selectedPage: 'weeks'
}

export const mainReducer = (state = initialState, action: Action): MainState => {
  switch (action.type) {
    case 'SET_USER_PASSWORD':
      return { ...state, userPassword: action.payload.userPassword }
    case 'SET_PAGE':
      return { ...state, selectedPage: action.payload.selectedPage }
    default:
      return state
  }
}