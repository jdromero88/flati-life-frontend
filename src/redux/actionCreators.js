import { SEARCH_TEXT,
  LOADING,
  LOGIN,
  CREATE_USER,
  FETCHED_USERS,
  FETCHED_PROJECTS,
  CREATE_TECHNOLOGY,
  FETCHED_TECHNOLOGY,
} from './actionType'

const USER_URL = 'http://localhost:3000/users'
const USER_LOGIN_URL = 'http://localhost:3000/users/login'
const PROJECTS_URL = 'http://localhost:3000/projects'
const TECHNOLOGIES_URL = 'http://localhost:3000/tech_specifications'

function onSearch(searchText) {
  return {type: SEARCH_TEXT, payload: searchText}
}

function login(user) {
  return {type: LOGIN, payload: user}
}
function loginUser(user) {
  return dispatch => {
    const confObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(user)
    }
    dispatch(loading())
    fetch(USER_LOGIN_URL,confObj)
    .then(res => res.json())
    .then(currentUser =>{
      if (currentUser.message !== 'Incorrect username or password!'){
        dispatch(login(currentUser))
      }else {
        alert('Wrong username or password')
        dispatch(login(null))
      }
    })
  }
}

function createdUser(user) {
  return{type: CREATE_USER, payload:user}
}
function createUser(newUser) {
  return dispatch => {
    const confObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify({user: newUser})
    }
    dispatch(loading())
    fetch(USER_URL, confObj)
    .then(res => res.json())
    .then(newUser => {
      newUser ?
        dispatch(createdUser(newUser))
      : alert('Something went wrong')
    })
    .catch(err => console.warn(err))
  }
}
function loading() {
  return {type:LOADING}
}

function fetchedUsers(usersArray) {
  return {type: FETCHED_USERS, payload: usersArray}
}

function fetchingUsers() {
  return (dispatch) => {
    dispatch(loading())
    fetch(USER_URL)
    .then(res => res.json())
    .then(usersArray => {
      dispatch(fetchedUsers(usersArray))
    })
    .catch(err => console.warn(err))
  }
}
//Technologies
function createdTechnology(technology) {
  return{type: CREATE_TECHNOLOGY, payload:technology}
}
function createTechnology(newTechnology) {
  return dispatch => {
    const confObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify({technology: newTechnology})
    }
    dispatch(loading())
    fetch(TECHNOLOGIES_URL, confObj)
    .then(res => res.json())
    .then(newTechnology => {
      newTechnology ?
        dispatch(createdTechnology(newTechnology))
      : alert('Something went wrong')
    })
    .catch(err => console.warn(err))
  }
}
function fetchedTechnologies(technologiesArray) {
  return {type: FETCHED_TECHNOLOGY, payload: technologiesArray}
}
function fetchingTechnologies() {
  return (dispatch) => {
    dispatch(loading())
    fetch(TECHNOLOGIES_URL)
    .then(res => res.json())
    .then(technologiesArray => {
      dispatch(fetchedTechnologies(technologiesArray))
    })
    .catch(err => console.warn(err))
  }
}

// Projects
function fetchedProjects(projectsArray) {
  return {type: FETCHED_PROJECTS, payload: projectsArray}
}

function fetchingProjects() {
  return (dispatch) => {
    dispatch(loading())
    fetch(PROJECTS_URL)
    .then(res => res.json())
    .then(projectsArray => {
      dispatch(fetchedProjects(projectsArray))
    })
    .catch(err => console.warn(err))
  }
}

export {fetchingUsers, fetchingProjects, onSearch, loginUser, createUser, createTechnology, fetchingTechnologies}
