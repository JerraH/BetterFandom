 import React, { Component } from 'react';
 import ErrorBoundary from '../../ErrorBoundary';

 export default function Comment(props) {
     return (
      <div className="card singleComment" key={props.comment.id}>
        <div className="card-header">
          {/* {this.props.comment.userId ?
          <p className="card-title">{props.comment.user.username}</p> : null} */}
        </div>
        <div className="card-body">
          <p className="card-text">{props.comment.content}</p>
        </div>
        {/*
        <div className="card-footer buttonholder">
          <button onClick={props.handleClick}>Reply!</button>
        </div> */}

      </div>

) }

