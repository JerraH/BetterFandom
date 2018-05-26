import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {WriteComment, AllComments} from '../index'
import ErrorBoundary from '../ErrorBoundary';
import { connect } from 'react-redux';
import { getPostComments } from '../../store'


class BlogEntry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentBoxVis: false,
      viewComments: false,
      viewLikes: false,
    }
    this.onCommentClick = this.onCommentClick.bind(this)
    this.viewCommentsClick = this.viewCommentsClick.bind(this)

  }

  onCommentClick() {
    this.setState({commentBoxVis: !this.state.commentBoxVis});
  }
  viewCommentsClick() {
    this.setState({viewComments: !this.state.viewComments})
  }

render(){
 let post = this.props.post;
 let user = this.props.post.user;
 let comments = this.props.post.comments;
 console.log('comments', comments)
  return (
    <div className="post card" id={post.id}>
      <div className="card-title userbox">
        <img className="avatar" src="#" />
        <h5 className="username">
          <Link to={`/users/${user.id}`} key={user.id}>{user.username}</Link>
        </h5>
      </div>
      <div className="card-body postText">
        {post.title ? <h3>{post.title}</h3> : null}
        {post.content}
      </div>
      <div className="buttonholder spread">
        <div className="left">
          <button className="btn btn-cancel">Like</button>
          <button className="btn btn-primary" onClick={this.onCommentClick}>Comment</button>
        </div>
        <div className="right">
          <button className="btn btn-cancel" onClick={this.viewCommentsClick} >
          Comments: ( {comments ?  comments.length : null} )</button>
        </div>
      </div> {/*end buttonholder */}
      { this.state.commentBoxVis ?
        <WriteComment postId={post.id} /> : null }
        {this.state.viewComments ?
        <ErrorBoundary>
          <AllComments postId={post.id} comments={comments} />
        </ErrorBoundary> : null}
    </div>
)} }

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

export default connect(mapStateToProps, mapDispatchToProps)(BlogEntry)

