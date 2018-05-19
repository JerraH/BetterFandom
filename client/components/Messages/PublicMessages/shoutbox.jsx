import React from 'react';
import { connect } from 'react-redux';

const ShoutBox = (props) => (
  <div className="card shoutbox">
    <div className="card-header">
      {props.message.sender ?
      <p className="card-title">{props.message.sender.username}</p> :
      <p className="card-title">Anonymous</p>}
    </div>
    <div className="card-body">
      <p className="card-text">{props.message.content}</p>
    </div>
    <div className="card-footer buttonholder">
      <button type="delete">Delete shout</button>
      <button onClick="">Shout back!</button>
    </div>

  </div>
);


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ShoutBox)
