import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_MESSAGE_CHANNELS = 'GET_MESSAGE_CHANNELS';
const GET_ONE_CHANNEL = 'GET_ONE_CHANNEl';
const SEND_MESSAGE = 'SEND_MESSAGE';


/**
 * INITIAL STATE
 */
const channels = {
  channels: [],
  messages: []
}

/**
 * ACTION CREATORS
 */

const getMessageChannels = messageChannels => ({
  type: GET_MESSAGE_CHANNELS,
  messageChannels
})
const getOneChannel = channel => ({
  type: GET_ONE_CHANNEL,
  channel
})
const sendMessage = message => ({
  type: SEND_MESSAGE,
  message
})


/**
 * THUNK CREATORS
 */

export const getMessages = () =>
  dispatch => {
    console.log('please let this be working')
    axios.get(`/api/messages`)
      .then(res => {
        console.log('my response is', res)
        let action = getMessageChannels(res.data)
        dispatch(action)
      })
      .catch(error => console.log(error))
  }


export const getMessageChannel = (channelId) =>
  dispatch =>
  axios.get(`/api/messages/${channelId}`)
  .then(res => {
    dispatch(getOneChannel(res.data))
  })
  .catch(error => console.log(error))

export const sendPrivateMessage = (message) =>
  dispatch =>
  axios.post(`/api/messages`, message)
  .then(res => {
    dispatch(sendMessage(res.data))
  })
  .catch(error => console.log(error))


/**
 * REDUCER
 */

const reducer = (state = channels, action) => {
  switch (action.type) {
    case GET_MESSAGE_CHANNELS:
      console.log('my message Channels are', action.messageChannels)
      return {channels: action.messageChannels}
    case GET_ONE_CHANNEL:
      return {channels: action.channel, messages: action.channel.privateMessages}
    case SEND_MESSAGE:
      return {messages: [...state.messages, action.message], channels: state.channels}

    default:
      return state
  }
}

export default reducer

