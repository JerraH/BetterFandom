import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from './MessageId';
import {getMessages, getThread, sendPrivateMessage} from '../../store/messages';
import ErrorBoundary from '../ErrorBoundary';

class AllMessages extends Component {

  componentDidMount() {
    console.log(this.props);
   this.props.getMessages()
  }


  render(){
  const messages = this.props.messages

    return (

      <div className="container">
      { messages && messages.length ?
        messages.map(message => {
        return (
          <ErrorBoundary key={message.id}>
            <Message key={message.id} message={message} />
          </ErrorBoundary>

        )
      }) : <div className="card alert alert-warning">Sorry, you have no messages to display!</div>}

      </div>
  )}
}


const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getMessages() {
      dispatch(getMessages())
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AllMessages)
