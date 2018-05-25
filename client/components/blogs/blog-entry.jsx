import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Comment} from '../index'


class BlogEntry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentBoxVis: false
    }
    this.onCommentClick = this.onCommentClick.bind(this)

  }

  onCommentClick() {

    this.setState({commentBoxVis: !this.state.commentBoxVis});
  }

render(){
 let post = this.props.post;
 let user = this.props.post.user;
  return (
    <div className="post card" id={post.id}>
      <div className="card-title userbox">
        <img className="avatar" src="#" />
        <h5 className="username">
          <Link to={`/users/${user.id}`} key={user.id}>{user.username}</Link>
        </h5>
      </div>
      <div className="card-body postText">
        {post.title ? <h3>post.title</h3> : null}
        {post.content}
      </div>
      <div className="buttonholder">
        <div className="left">
          <button className="btn btn-cancel">Like</button>
          <button className="btn btn-primary" onClick={this.onCommentClick}>Comment</button>
        </div>
      </div> {/*end buttonholder */}
      { this.state.commentBoxVis ?
        <Comment postId={post.id} /> : null }
    </div>
)} }

export default BlogEntry;

