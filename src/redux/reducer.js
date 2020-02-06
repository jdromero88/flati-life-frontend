import {combineReducers} from 'redux'
import {SEARCH_TEXT,
  LOGIN,
  CREATE_USER,
  FETCHED_USERS,
  FETCHED_PROJECTS,
  CREATE_TECHNOLOGY,
  FETCHED_TECHNOLOGY,
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
const technologiesReducer = (oldState=[], action) => {
  switch (action.type) {
    case CREATE_TECHNOLOGY:
      oldState.push(action.payload)
      return oldState
    case FETCHED_TECHNOLOGY:
      return action.payload
    default:
      return oldState
  }
}



const rootReducer = combineReducers({
  searchText: searchTextReducer,
  currentUser: currentUsersReducers,
  users: usersReducers,
  projects: projectsReducers,
  technologies: technologiesReducer,
})

export default rootReducer
