import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_BIT_FEED = 'GET_BIT_FEED';
const GET_BLOCK_FEED = 'GET_BLOCK_FEED';
const GET_BLOCK_POSTS = 'GET_BLOG_POSTS';
const POST_BLOCK_ENTRY = 'POST_BLOG_ENTRY';

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


const reducer = (state = posts, action) => {
  switch (action.type) {
    case (GET_BLOCK_FEED):
      return action.blockFeed
    default:
      return state
  }
}

export default reducer;

