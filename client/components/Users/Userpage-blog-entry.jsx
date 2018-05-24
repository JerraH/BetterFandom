import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Comment} from '../index'


class UserpageBlogEntry extends Component {
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
  return (
    <div className="post card" id={post.id}>
      <div className="card-title userbox">
        <img className="avatar" src="#" />
        {post.title ? <h3>post.title</h3> : null}
      </div>
      <div className="card-body postText">
        {post.content}
      </div>
      <div className="buttonholder">
        <div className="left">
          <button className="btn btn-cancel">Like</button>
          <button className="btn btn-primary" onClick={this.onCommentClick}>Comment</button>
        </div>
      </div> {/*end buttonholder */}
      { this.state.commentBoxVis ?
        <Comment /> : null }
    </div>
)} }

export default UserpageBlogEntry;

