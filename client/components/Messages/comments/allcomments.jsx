import React, { Component } from 'react';
import {Comment} from '../../index'
import { getPostComments } from '../../../store'
import {connect} from 'react-redux'

class AllComments extends Component {
  componentDidMount() {
    this.props.getCommentsBound(this.props.postId)
  }

  //this will show all the comments for a particular post
    render() {
      console.log('props', this.props)
      return (
        <div className="card">
          { this.props.comments.length ? this.props.comments.map(comment => {
            return (
              <Comment key={`commentId` + comment.id} comment={comment} />
            )
          }) : <div key="1" className="alert">There are no comments to show!</div>
          }
        </div>
      )
    }
  }


const mapStateToProps = (state) => ({
  user: state.user,
  comments: state.comments
})

const mapDispatchToProps = dispatch => {
  return {
    getCommentsBound(postId) {
      dispatch(getPostComments(postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
