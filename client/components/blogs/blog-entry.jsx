import React, { Component } from 'react';

    function BlogEntry(props) { return (
    <div className="post card" id={props.post.id}>
      <div className="card-title">
        <h3>{props.post.title ? props.post.title : null}</h3>
      </div>
      <div className="card-body postText">
        {props.post.content}
      </div>
      <div className="buttonholder">
        <button className="btn">Like</button>
        <button className="btn">Comment</button>
      </div>
    </div>
);
}


export default BlogEntry;
