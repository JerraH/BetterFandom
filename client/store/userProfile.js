import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_USER_PROFILE = 'GET_USER_PROFILE'
const GET_MY_PROFILE = 'GET_MY_PROFILE'
const EDIT_PROFILE = 'EDIT_PROFILE'

/**
 * ACTION CREATORS
 */

const getUserProfile = user => ({type: GET_USER_PROFILE, user})


 /**
  * THUNK CREATORS
  */
  export const getOtherUser = (userId) =>
  dispatch =>
    axios.get(`/api/users/${userId}`)
    .then(res => dispatch(getUserProfile(res)))
    .catch(err => console.log(err))

const userProfile = {}

const reducer = (state = userProfile, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      console.log(action)
      return action.user ;

    default:
      return state;
  }
}

export default reducer
