import axios from 'axios';

/**
 * ACTION TYPES
 */

const SEND_ASK = 'SEND_ASK';
const GET_ASKS = 'GET_ASKS';

/**
 * ACTION CREATORS
 */

const sendAsk = ask => ({
  type: SEND_ASK,
  ask
})
const getAsks = asks => ({
  type: GET_ASKS,
  asks
})



export const getPublicMessages = (userId) =>
    dispatch => {
      axios.get(`/api/messages/${userId}/publicmessages`)
      .then(res => {
        let action = getAsks(res.data)
        dispatch(action)
      })
    }

export const sendAskToUser = ask =>
  dispatch => {
    console.log("my ask is", ask);
    axios.post(`/api/messages/${ask.recipientId}/publicmessage`, ask)
    .then(res => {
      console.log("my res is", res)
      dispatch(sendAsk(res.data))
    })}


  const asks = []

  const reducer = (state = asks, action) => {
    switch (action.type) {
      case SEND_ASK:
        return state;
      case GET_ASKS:
        return action.asks
      default:
        return state
    }
  }

  export default reducer

