import { SEARCH_TEXT,
  LOADING,
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
import React from 'react'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'

const USER_URL = 'http://localhost:3000/users'
const USER_LOGIN_URL = 'http://localhost:3000/users/login'
const PROJECTS_URL = 'http://localhost:3000/projects'
const TECHNOLOGIES_URL = 'http://localhost:3000/tech_specifications'
const COHORTS_URL = 'http://localhost:3000/cohorts'

function loading() {
  return {type:LOADING}
}

function onSearch(searchText) {
  return {type: SEARCH_TEXT, payload: searchText}
}
// cohort functions
function fetchedCohort(cohorts) {
  return{type:FETCHED_COHORTS, payload:cohorts}
}
 function fetchingCohorts() {
  return dispatch => {
    fetch(COHORTS_URL)
    .then(res => res.json())
    .then(cohort => {
      dispatch(fetchedCohort(cohort))
    })
    .catch(err => console.warn(err))
  }
 }
// end cohort functions


// User functions
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

function logout(user) {
  return {type: LOGOUT, payload:user}
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
      body: JSON.stringify({user:newUser})
    }
    dispatch(loading())
    fetch(USER_URL, confObj)
    .then(res => res.json())
    .then(newUser => {
      if (!newUser.error){
        dispatch(createdUser(newUser))
        swal({
          text:`Welcome ${newUser.username}! You are ready to go!`,
          icon:'success'
        })
        return true
      }else{
        dispatch(createdUser(null))
        swal({
          text:"Sorry, Username already taken.",
          icon:"warning"
        })
        return false
      }

    })
    .catch(err => console.warn(err))
  }
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
// end User functions

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
function createdProject(project) {
  return {type: CREATE_PROJECT, payload:project}
}
function createProject(newProject, user, collaboratorID=null, technologies=null) {
  return dispatch => {
    const confObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify({project: newProject, user: user, collaborator_id: collaboratorID, technologies: technologies})
    }
    dispatch(loading())
    fetch(PROJECTS_URL, confObj)
    .then(res => res.json())
    .then(newProject => {
      newProject ?
        dispatch(createdProject(newProject))
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

export {fetchingUsers, fetchingProjects, onSearch, loginUser, logout, createUser, createTechnology, fetchingTechnologies, createProject, fetchingCohorts}
