import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_BIT_FEED = 'GET_BIT_FEED';
const GET_BLOCK_FEED = 'GET_BLOCK_FEED';
const GET_BLOCK_POSTS = 'GET_BLOG_POSTS';
const POST_BLOCK_ENTRY = 'POST_BLOG_ENTRY';
const POST_BIT_ENTRY = 'POST_BIT_ENTRY'
const EDIT_POST = 'EDIT_ENTRY'
const BLACKLIST_POST = 'BLACKLIST_POST'
const DELETE_POST = 'DELETE_ENTRY'

/**
 * INITIAL STATE
 */
const posts = []

/**
 * ACTION CREATORS
 */

 const getBits = bitFeed => ({type: GET_BIT_FEED, bitFeed})
const getBlocks = blockFeed => ({type: GET_BLOCK_FEED, blockFeed})
const postBlock = blockEntry => ({type: POST_BLOCK_ENTRY, blockEntry})
const postBit = bitEntry => ({type: POST_BIT_ENTRY, bitEntry})
const editPost = entry => ({type: EDIT_POST, entry})
const blacklistPost = post => ({type: BLACKLIST_POST, post})
const deletePost = postId => ({type: DELETE_POST})

/**
 * THUNK CREATORS
 */

 export const getBlockFeed = (user) =>
  dispatch => {
    axios.get(`/api/feed/blocks`)
    .then(res => {
      let action = getBlocks(res.data)
      dispatch(action)
    })
  }

  export const getBitFeed = (user) =>
    dispatch => {
      axios.get(`/api/feed/bits`)
      .then(res => {
        let action = getBits(res.data)
        dispatch(action)
      })
    }

  export const postBlockEntry = (entry) =>
    dispatch => {
      axios.post(`/api/posts/blocks`)
      .then(res => {
        let action = postBlock(res.data)
        dispatch(action)
      })
    }

      export const postBitEntry = (entry) =>
    dispatch => {
      axios.post(`/api/posts/bits`)
      .then(res => {
        let action = postBit(res.data)
        dispatch(action)
      })
    }

    export const editExistingPost = (post) =>
      dispatch => {
        axios.put(`/api/posts/`)
        .then(res => {
          let action = editPost(res.data)
          dispatch(action)
        })

      }


const reducer = (state = posts, action) => {
  switch (action.type) {
    case (GET_BLOCK_FEED):
      return action.blockFeed;
    case (GET_BIT_FEED):
      return action.bitFeed;
    case (POST_BIT_ENTRY):
      return [...state, action.bitEntry]
    case (POST_BLOCK_ENTRY):
      return [...state, action.blockEntry];
    case (EDIT_POST):
      return []
    case (DELETE_POST):
      return []
    case (BLACKLIST_POST):
      return []
    default:
      return state
  }
}

export default reducer;

