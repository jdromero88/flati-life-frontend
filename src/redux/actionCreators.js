import { LOADING_USERS,
  FETCHED_USERS,
  SET_CURRENT_USER} from './actionType'

const URL = 'http://localhost:3000/users'

function loadingUsers() {
  return {type: LOADING_USERS}
}

function fetchedUsers(usersArray) {
  return {type: FETCHED_USERS, payload: usersArray}
}

function loadCurrentUser() {
  return {type: SET_CURRENT_USER}
}

function setCurrentUser(currentUser) {
  return {type: SET_CURRENT_USER, payload: currentUser}
}

function getCurrentUser() {
  return (dispatch) => {
    dispatch(setCurrentUser())
    fetch(URL)
    .then(res => res.json())
    .then(currentUser => {
      dispatch(setCurrentUser(currentUser))
    })
    .catch(err => console.warn(err))
  }
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
export {fetchingUsers, getCurrentUser}
