import {combineReducers} from 'redux'
import {FETCHED_USERS, SET_CURRENT_USER} from './actionType'

const usersReducers = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_USERS:
      return action.payload
    case SET_CURRENT_USER:
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  users: usersReducers
})

export default rootReducer
