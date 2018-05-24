import {
  expect
} from 'chai';
import {getMessages} from '../messages';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {
    messages: {}
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('me', () => {
    describe('getMessageThreads', () => {
      const user = {
        name: 'Jonathan',
        id: '4', username: 'Whisper'
      }
      const myThread = [{
          content: 'Hello suzy',
          senderId: '2',
          recipientID: '4',
          messageId: '1',
          threadId: '2'
        },
        {
          content: 'Hi karen!',
          senderId: '4',
          recipientID: '2',
          messageId: '2',
          threadId: '2'
        },
        {
          content: 'how are you doing?',
          senderId: '2',
          recipientID: '4',
          messageId: '3',
          threadId: '2'
        }
      ]

      it('eventually dispatches the GET MESSAGE THREADS action', () => {
        mockAxios.onGet(`api/${user.id}/messages`).replyOnce(200, myThread)
        return store.dispatch(getMessages())
          .then(() => {
            const actions = store.getActions()
            expect(actions[0].type).to.be.equal('GET_MESSAGE_THREAD')
            expect(actions[0].messageThread).to.be.deep.equal(myThread)
          })
      })
    })
  })
})

