import {combineReducers} from 'redux'
import {SEARCH_TEXT,
  LOGIN,
  LOGOUT,
  CREATE_USER,
  FETCHED_USERS,
  FETCHED_PROJECTS,
  CREATE_TECHNOLOGY,
  FETCHED_TECHNOLOGY,
  CREATE_PROJECT,
  FETCHED_COHORTS,
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
    case CREATE_USER:
      // debugger
      const newUser = action.payload
      return [...oldState, newUser]
    default:
      return oldState
  }
}

const currentUsersReducers = (oldState=null, action) => {
  switch(action.type){
    case LOGIN:
      return action.payload
    case LOGOUT:
      return action.payload
    default:
      return oldState
  }
}

const projectsReducers = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_PROJECTS:
      return action.payload
    case CREATE_PROJECT:
      const newProject = action.payload
      return [...oldState, newProject]
    default:
      return oldState
  }
}

const cohortsReducers = (oldState=[], action) => {
    switch (action.type) {
      case FETCHED_COHORTS:
        return action.payload
      default:
        return oldState
    }
}

const technologiesReducer = (oldState=[], action) => {
  switch (action.type) {
    case CREATE_TECHNOLOGY:
      const newTechnology = action.payload
      return [...oldState, newTechnology]
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
  cohorts: cohortsReducers,
})

export default rootReducer
