import {combineReducers} from 'redux'
import {FETCHED_USERS,
  FETCHED_PROJECTS
} from './actionType'

const usersReducers = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_USERS:
      return action.payload
    default:
      return oldState
  }
}

const projectsReducers = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_PROJECTS:
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  users: usersReducers,
  projects: projectsReducers,
})

export default rootReducer
