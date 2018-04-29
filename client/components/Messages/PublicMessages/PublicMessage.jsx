import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from '../MessageId';
import {getMessages, getThread, sendPrivateMessage} from '../../../store/messages';
import ErrorBoundary from '../../ErrorBoundary';
import {Link} from 'react-router-dom'

class PublicMessages extends Component {

  componentDidMount() {
    this.props.getAllMessages()
  }


  render(){
  const messages = this.props.messages
  const user = this.props.user
    console.log("my messages are", messages)
    return (

      <div className="container">
      { messages && messages.length ?
        messages.map(message => {
          console.log("my message is", message)
        return (
          <Link to={`messages/${message.id}`} key={message.id}>
            <Message key={message.id} message={message} user={user} />
          </Link>
        )
      }) : <div className="card alert alert-warning">Sorry, you have no messages to display!</div>}

      </div>
  )}
}


const mapStateToProps = (state) => {
  console.log("are there messages on my state", state.messages)
  return {
    messages: state.messages,
    user: state.user
  }

}

const mapDispatch = (dispatch) => {
  return {
    getPublicMessages() {
      dispatch(getMessages())
    }
  }
};


export default connect(mapStateToProps, mapDispatch)(PublicMessages)

PublicMessages.propTypes = {
  getAllMessages: PropTypes.func.isRequired,
}
