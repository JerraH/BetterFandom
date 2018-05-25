import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENT_HISTORY = 'GET_COMMENT_HISTORY'
const POST_COMMENT = 'POST_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const POST_LIKE = 'POST_LIKE';
const REMOVE_LIKE = 'REMOVE_LIKE'
const GET_COMMENTS_NOTIFICATIONS = 'GET_COMMENTS_NOTIFICATIONS'

/**
 * ACTION CREATORS
 */

const getComments = comments => ({
  type: GET_COMMENTS,
  comments
})

const getCommentsNotifications = comments => ({
  type: GET_COMMENTS_NOTIFICATIONS,
  comments
})

const getCommentHistory = comments => ({
  type: GET_COMMENT_HISTORY,
  comments
})

const postComment = comment => ({
  type: POST_COMMENT,
  comment
})

const editComment = newComment => ({
  type: EDIT_COMMENT,
  newComment
})

const postLike = like => ({
  type: POST_LIKE,
  like
})

const removeLike = () => ({
  type: REMOVE_LIKE
})

/**
 * THUNK CREATORS
 */

export const getPostComments = (postId) =>
  dispatch =>
    axios.get(`/api/comments/${postId}`)
    .then(res => {
      let action = getComments(res.data)
      dispatch(action)
    })


  // export const getCommentsNotificationsThunk = (userId) =>
  //   dispatch => {
  //     axios.get(`/api/comments/${userId}`)
  //   }

  export const postMyComment = (comment) =>
    dispatch =>
      axios.post(`/api/comments/`, comment)
      .then(res => {
        let action = postComment(res.data)
        dispatch(action)
      })


/**
 * INITIAL STATE
 */
const interactions = {comments: [], likes: []}


/**
 *
 *REDUCER
 */
const reducer = (state = interactions, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments;
    case POST_COMMENT:
      return [{comments: [...state.comments, action.comment]}]
    case GET_COMMENT_HISTORY:
    case GET_COMMENTS_NOTIFICATIONS:
    case POST_LIKE:
    case REMOVE_LIKE:
    case EDIT_COMMENT:
      break
    default:
      return state
  }
}

export default reducer
