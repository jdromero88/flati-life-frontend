import { LOADING_USERS,
  FETCHED_USERS } from './actionType'

const URL = 'http://localhost:3000/users'

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
  }
}
export {fetchingUsers}
