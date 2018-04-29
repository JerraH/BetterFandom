import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from './MessageId';
import ChannelHead from './ChannelHead.jsx';
import {getMessages, getThread, sendPrivateMessage} from '../../store/messages';
import ErrorBoundary from '../ErrorBoundary';
import {Link} from 'react-router-dom'

class AllMessages extends Component {

  componentDidMount() {
    this.props.getAllMessages()
  }


  render(){
  const channels = this.props.channels
  const user = this.props.user
    console.log("my channels are", channels)
    return (

      <div className="container">
      { channels && channels.length ?
        channels.map(channel => {
          console.log("my channel is", channel)
        return (
          <Link to={`messages/${channel.id}`} key={channel.id}>
            <ChannelHead key={channel.id} channel={channel} user={user} />
          </Link>
        )
      }) : <div className="card alert alert-warning">Sorry, you have no messages to display!</div>}

      </div>
  )}
}


const mapStateToProps = (state) => {
  console.log("are there channels on my state", state.messages)
  return {
    channels: state.messages,
    user: state.user
  }

}

const mapDispatch = (dispatch) => {
  return {
    getAllMessages() {
      dispatch(getMessages())
    }
  }
};


export default connect(mapStateToProps, mapDispatch)(AllMessages)

AllMessages.propTypes = {
  getAllMessages: PropTypes.func.isRequired,
}
