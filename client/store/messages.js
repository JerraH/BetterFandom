import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_MESSAGE_THREADS = 'GET_MESSAGE_THREADS';
const GET_ONE_THREAD = 'GET_ONE_THREAD';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SEND_ASK = 'SEND_ASK'

/**
 * INITIAL STATE
 */
const channels = []

/**
 * ACTION CREATORS
 */

const getMessageThreads = messageThreads => ({
  type: GET_MESSAGE_THREADS,
  messageThreads
})
const getOneThread = thread => ({
  type: GET_ONE_THREAD,
  thread
})
const sendMessage = message => ({
  type: SEND_MESSAGE,
  message
})
const sendAsk = ask => ({
  type: SEND_ASK,
  ask
})

/**
 * THUNK CREATORS
 */

export const getMessages = () =>
  dispatch => {
    console.log("please let this be working")
    axios.get(`/api/messages`)
      .then(res => {
        console.log('my response is', res)
        let action = getMessageThreads(res.data)
        dispatch(action)
      })
      .catch(error => console.log(error))
  }

// export const getAllThreads = (channelId) =>
//     dispatch => {
//       axios.get(`api/messages/${channelId}`)
//       .then(res => {
//         let action = getAllThreads(res.data)
//         dispatch(action)
//       })
//     }
export const sendAskToUser = (recipient, ask) =>
  dispatch =>
  axios.post(`/api/${recipient.id}/public`, ask)
  .then(res => {
    dispatch(sendAsk(res.data))
  })
  .catch(error => console.log(error))



export const getMessageThread = (threadId) =>
  dispatch =>
  axios.get(`/api/messages/${threadId}`)
  .then(res => {
    dispatch(getOneThread(res.data))
  })
  .catch(error => console.log(error))

export const sendPrivateMessage = (user, message) =>
  dispatch =>
  axios.post(`/api/${user.id}`, message)
  .then(res => {
    dispatch(sendMessage(res.data))
  })
  .catch(error => console.log(error))




/**
 * REDUCER
 */

const reducer = (state = channels, action) => {
  switch (action.type) {
    case GET_MESSAGE_THREADS:
      console.log("my message threads are", action.messageThreads)
      return action.messageThreads
    case GET_ONE_THREAD:
      return [...action.thread.privateMessages]
    case SEND_MESSAGE:
      return [...state, action.message]
    case SEND_ASK:
      return state;

    default:
      return state
  }
}

export default reducer

