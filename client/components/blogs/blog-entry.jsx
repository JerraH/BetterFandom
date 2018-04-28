import React, { Component } from 'react';

function BlogEntry(props) {
    return (
      <div className="post card" id={props.post.id}>
        <div className="card-title">
          <h3></h3>
        </div>
        <div className="card-body postText">
        {props.post.content}
        </div>
        <ul>
          <li>Like</li>
          <li>Share</li>
          <li>Comment</li>
        </ul>
      </div>
    );
  }


export default BlogEntry;
