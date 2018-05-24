import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {default as ShoutBox} from './shoutbox.jsx';
import {getPublicMessages, sendPrivateMessage} from '../../../store/asks';
import ErrorBoundary from '../../ErrorBoundary';

class PublicMessages extends Component {

  componentDidMount() {
    this.props.getPublicMessages(this.props.user.id)
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
            <ShoutBox key={message.id} message={message} user={user} />
        )
      }) : <div className="card alert alert-warning">Sorry, you have no asks right now!</div>}

      </div>
  )}
}


const mapStateToProps = (state) => {
  console.log("are there asks on my state", state.asks)
  return {
    messages: state.asks,
    user: state.user
  }

}

const mapDispatch = (dispatch) => {
  return {
    getPublicMessages(userId) {
      dispatch(getPublicMessages(userId))
    }
  }
};


export default connect(mapStateToProps, mapDispatch)(PublicMessages)

// PublicMessages.propTypes = {
//   getMessages: PropTypes.func.isRequired,
// }
