import React, { Component } from 'react';


function BlogEntry(props) { return (
<div className="post card" id={props.post.id}>
  <div className="card-title">
    <img src="#" />
    <h4>{props.post.user.username}</h4>
  </div>
  <div className="card-body postText">
    <h3>{props.post.title ? props.post.title : null}</h3>
    {props.post.content}
  </div>
  <div className="buttonholder">
    <div className="left">
      <button className="btn">Like</button>
      <button className="btn">Comment</button>
    </div>

  </div>
</div>
); } export default BlogEntry;

