import {combineReducers} from 'redux'
import {SEARCH_TEXT,
  LOGIN,
  LOGOUT,
  CREATE_USER,
  SET_CURRENT_USER,
  FETCHED_USERS,
  FETCHED_PROJECTS,
  CREATE_TECHNOLOGY,
  FETCHED_TECHNOLOGY,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
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
      return [...oldState, action.payload]
    default:
      return oldState
  }
}

const currentUsersReducers = (oldState=null, action) => {
  switch(action.type){
    case LOGIN:
      return action.payload
    case SET_CURRENT_USER:
      return {...action.payload}
    case CREATE_PROJECT:
      // debugger
      const newProject = {...oldState,
          user_projects:[...oldState.user_projects, action.payload]
        }
      return newProject
    case UPDATE_PROJECT:
        // debugger
        const updateProject = {...oldState, user_projects: [...oldState.user_projects.map(p => {
          if (p.project.id === action.payload.id) {
            p.project = action.payload
          }
          return p
          })
        ]}
      return updateProject
    case DELETE_PROJECT:
      const project = {...oldState,
          user_projects:[...oldState.user_projects.filter(p => p.project.id !== action.payload.id)]
        }
      return project
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
      return [...oldState, action.payload.project]
    case UPDATE_PROJECT:
      // debugger
      const newProjects = [...oldState.filter( p => p.id !== action.payload.id), action.payload]
      return newProjects
    case DELETE_PROJECT:
      // debugger
      const newProjets = [...oldState.filter(p => p.id !== action.payload.id)]
      return newProjets
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
