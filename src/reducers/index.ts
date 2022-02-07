import { combineReducers } from "redux"

import { mainReducer } from './mainReducer'

export const Reducers = combineReducers({
    mainState: mainReducer
})