interface Action {
  type: string
  payload: any
}

const initialState: MainState = {
  userPassword: 'teste'
}

export const mainReducer = (state = initialState, action: Action): MainState => {
  switch (action.type) {
    case 'SET_USER_PASSWORD':
      return { ...state, userPassword: action.payload.userPassword }
    default:
      return state
  }
}