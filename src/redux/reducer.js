import {combineReducers} from 'redux'
import {SEARCH_TEXT,
  LOGIN,
  CREATE_USER,
  FETCHED_USERS,
  FETCHED_PROJECTS
} from './actionType'

const searchTextReducer = (oldState='', action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return action.payload
    default:
      return oldState
  }
}

const usersReducers = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_USERS:
      return action.payload
    default:
      return oldState
  }
}

const currentUsersReducers = (oldState=null, action) => {
  switch(action.type){
    case LOGIN:
      return action.payload
    case CREATE_USER:
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
  searchText: searchTextReducer,
  currentUser: currentUsersReducers,
  newUser: currentUsersReducers,
  users: usersReducers,
  projects: projectsReducers,
})

export default rootReducer
