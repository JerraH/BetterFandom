import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from './MessageId';
import {getMessages, getThread, sendPrivateMessage} from '../../store/messages';
import ErrorBoundary from '../ErrorBoundary';

function AllMessages(props) {

  const messages = props.messages

  return (

      <div className="container">
      { messages && messages.length ?
        messages.map(message => {
        return (
            <Message key={message.id} message={message} />

        )
      }) : <div className="card alert alert-warning">Sorry, you have no messages to display!</div>}

      </div>
  )}


const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }

}

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllMessages() {
//       dispatch(getMessages())
//     }
//   }
// };


export default connect(mapStateToProps)(AllMessages)
