/**
 * ACTION TYPES
 */
const SET_RECIPIENT = 'SET_RECIPIENT'

/**
 * ACTION CREATOR
 */

export const setRecipient = (user) => ({type: SET_RECIPIENT, user})

const recipient = {}

const reducer = (state = recipient, action) => {
  switch (action.type) {
    case SET_RECIPIENT:
      return action.user
    default:
      return state;
  }
}

export default reducer
