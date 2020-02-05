import { SEARCH_TEXT, LOADING_USERS,
  FETCHED_USERS,
  LOADING_PROJECTS,
  FETCHED_PROJECTS,
} from './actionType'

const URL = 'http://localhost:3000/users'
const PROJECTS_URL = 'http://localhost:3000/projects'

function onSearch(searchText) {
  return {type: SEARCH_TEXT, payload: searchText}
}

function loadingUsers() {
  return {type: LOADING_USERS}
}

function fetchedUsers(usersArray) {
  return {type: FETCHED_USERS, payload: usersArray}
}

function fetchingUsers() {
  return (dispatch) => {
    dispatch(loadingUsers())
    fetch(URL)
    .then(res => res.json())
    .then(usersArray => {
      dispatch(fetchedUsers(usersArray))
    })
    .catch(err => console.warn(err))
  }
}

// Projects
function loadingProjects() {
  return {type: LOADING_PROJECTS}
}

function fetchedProjects(projectsArray) {
  return {type: FETCHED_PROJECTS, payload: projectsArray}
}

function fetchingProjects() {
  return (dispatch) => {
    dispatch(loadingProjects())
    fetch(PROJECTS_URL)
    .then(res => res.json())
    .then(projectsArray => {
      dispatch(fetchedProjects(projectsArray))
    })
    .catch(err => console.warn(err))
  }
}
export {fetchingUsers, fetchingProjects, onSearch}
