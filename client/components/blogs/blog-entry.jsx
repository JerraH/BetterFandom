import React, { Component } from 'react';
import {Link} from 'react-router-dom';


function BlogEntry(props) {
  let post = props.post;
  let user = props.post.user
  return (
<div className="post card" id={post.id}>
  <div className="card-title">
    <img src="#" />
    <h4><Link to={`/users/${user.id}`} key={user.id}>{user.username}</Link></h4>
  </div>
  <div className="card-body postText">
    <h3>{post.title ? post.title : null}</h3>
    {post.content}
  </div>
  <div className="buttonholder">
    <div className="left">
      <button className="btn">Like</button>
      <button className="btn">Comment</button>
    </div>

  </div>
</div>
); } export default BlogEntry;

