import { axios } from 'axios';

/**
 * ACTION TYPES
 */

const GET_MESSAGE_THREADS = 'GET_MESSAGE_THREADS';
const GET_ONE_THREAD = 'GET_ONE_THREAD';
const SEND_MESSAGE = 'SEND_MESSAGE';

/**
 * INITIAL STATE
 */
const initialMessages = []

/**
 * ACTION CREATORS
 */

const getMessageThreads = messages => ({type: GET_MESSAGE_THREADS, messages})
const getOneThread = thread => ({type: GET_ONE_THREAD, thread})
const sendMessage = message => ({type: SEND_MESSAGE, message})

/**
 * THUNK CREATORS
 */

 export const getMessages = () =>
   dispatch =>
    axios.get(`/api/messages`)
      .then(res => {
        console.log('my response is', res)
        let action = getMessageThreads(res.data)
        dispatch(action)
      })
      .catch(error => console.log(error))


 export const getThread = (user, messageThread) =>
   dispatch =>
    axios.get(`/api/${user.id}/${messageThread.id}`)
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

 const reducer = (state = initialMessages, action) => {
   switch (action.type) {
    case GET_MESSAGE_THREADS:
      return action.messages
    case GET_ONE_THREAD:
      return action.messages
    case SEND_MESSAGE:
      return [...state, action.message]

     default:
       return state
   }
 }

 export default reducer

