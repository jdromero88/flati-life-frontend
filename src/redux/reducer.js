import {combineReducers} from 'redux'
import {FETCHED_USERS} from './actionType'

const usersReducers = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_USERS:
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  users: usersReducers
})

export default rootReducer
